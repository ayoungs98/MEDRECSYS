import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import bcrypt from "bcryptjs-react";
import dataSource from './dataSource.js'

function UpdateAccount() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const passwordInputRef = useRef();
    const password2InputRef = useRef();

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    let user = {
        FIRST_NAME: state.FIRST_NAME,
        LAST_NAME: state.LAST_NAME,
        EMAIL: state.EMAIL,
        ID: state.ID,
        ROLE: state.ROLE,
    };

    let patient = {
        FIRST_NAME: first_name,
        LAST_NAME: last_name,
        EMAIL: email,
        ID: id,
        ROLE: role,
        PASSWORD: password,
    };

    let res;

    const handlePatientLookup = async () => {
        let res;
        res = await dataSource.get('/login/email/' + patient.EMAIL );
        let response = res.data[0];
        if(response === undefined) {
            alert("Account with email: " + patient.EMAIL +  " not found");
        } else {

            setFirst_name(response.FIRST_NAME);
            setLast_name(response.LAST_NAME);
            setEmail(response.EMAIL)
            setRole(response.ROLE);
            setId(response.ID);
            setPassword(response.PASSWORD);
            
        }
        
    }

    const handleUpdate = async () => {
        const pw = passwordInputRef.current.value;
        const pw2 =password2InputRef.current.value;

        if(pw === "") {
            res = await dataSource.put('/login/update/', patient );
            console.log(res.status);
            if(res.status === 200){
                alert("Account updated.")
            }
            navigate("/systemAdmin", { state : user });
        } else {
            if (pw !== pw2) {
                alert("Passwords do not match");
            } else {
                const hashedPW = bcrypt.hashSync(pw, 13)
                patient = {...patient, PASSWORD:hashedPW}
                res = await dataSource.put('/login/update/', patient );
                console.log(res.status);
                if(res.status === 200){
                    alert("Account updated.")
                }
                navigate("/systemAdmin", { state : user });
            }
        }        
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/systemAdmin", { state : user });
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-40">
                <h1>Update Account</h1>
                <div>
                    <p>Search for Patient</p>
                        <Row>
                            <Col>
                            <label htmlFor='email'>Email:</label><br/>
                            <input type="text" className='from-control' name='email' onChange={(e) => patient = {...patient, EMAIL: e.target.value}} required></input>
                            </Col>
                        </Row><br/>
                        <div>
                            <button type="button" className="btn btn-success w-30 rounded-0" onClick={handlePatientLookup}>Search</button>
                        </div>
                </div>
                <div>
                    <form>
                    <div className="mb-3">
                        <label htmlFor="FIRST_NAME"> <strong>First Name </strong></label>
                        <input type="text" defaultValue={first_name} name="FIRST_NAME"
                        onChange={(e) => setFirst_name(e.target.value)} className="form-control rounded-0" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LAST_NAME"> <strong>Last Name </strong></label>
                        <input type="text" defaultValue={last_name} name="LAST_NAME"
                         onChange={(e) => setLast_name(e.target.value)} className="form-control rounded-0" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ROLE"> <strong>Role </strong></label>
                        <input type="email" defaultValue={role} name="ROLE"
                        onChange={(e) => setRole(e.target.value)} className="form-control rounded-0" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="PASSWORD"><strong>Password </strong></label>
                        <input type="password" placeholder="Enter Password" name="PASSWORD"
                        ref={passwordInputRef} className="form-control rounded-0" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="PASSWORD2"><strong>Re-enter Password </strong></label>
                        <input type="password" placeholder="Re-enter Password" name="PASSWORD2"
                        ref={password2InputRef} className="form-control rounded-0" required></input>
                    </div>
                    <div>
                        <button type="button" className="btn btn-danger w-40 rounded-0" onClick={handleUpdate}>Update</button>
                        <button type="button" className="btn btn-warning w-40 rounded-0" onClick={handleCancel}>Cancel</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateAccount

/*
patient = {...patient, FIRST_NAME:response.FIRST_NAME};
            patient = {...patient, LAST_NAME:response.LAST_NAME};
            patient = {...patient, EMAIL:response.EMAIL};
            patient = {...patient, ID:response.ID};
            patient = {...patient, ROLE:response.ROLE};
            patient = {...patient, PASSWORD:response.PASSWORD};

*/