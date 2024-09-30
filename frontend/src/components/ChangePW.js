import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react";
import dataSource from './dataSource.js'

function ChangePW () {

    const { state } = useLocation();
    const navigate = useNavigate();
    const passwordInputRef = useRef();
    const password2InputRef = useRef();

    let user = {
        FIRST_NAME: state.FIRST_NAME,
        LAST_NAME: state.LAST_NAME,
        EMAIL: state.EMAIL,
        ID: state.ID,
        ROLE: state.ROLE,
    };

    const handleSubmit = async (e)=> {
        e.preventDefault();

        const pw = passwordInputRef.current.value;
        const pw2 =password2InputRef.current.value;

        if (pw !== pw2) {
            alert("Passwords do not match");
        } else {
            const hashedPW = bcrypt.hashSync(pw, 13);

            let update = {
                PASSWORD: hashedPW,
                ID: state.ID,
            };

            let res;
            res = await dataSource.put('/login/update/password/', update  );
            console.log(res.status);
            alert("Password changed.");
            switch (user.ROLE) {
                case 'P':
                case 'p':
                    navigate('/patientHome', { state : user });
                    break;
                case "A":
                case 'a':
                    navigate('/systemAdmin', { state : user });
                    break;
                case "E":
                case "e":
                    navigate('/staffHome', { state : user });
                    break;
                default:
                    break;
            };
        };
    };

    const handleCancel = () => {
        switch (user.ROLE) {
            case 'P':
            case 'p':
                navigate('/patientHome', { state : user });
                break;
            case "A":
            case 'a':
                navigate('/systemAdmin', { state : user });
                break;
            case "E":
            case "e":
                navigate('/staffHome', { state : user });
                break;
            default:
                break;
        };
    };



    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-50">
                <form onSubmit={handleSubmit}>
                    <h1>Change Password</h1><br/>
                    <h2>Hello {state.FIRST_NAME} {state.LAST_NAME}</h2><br/>
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
                        <button type='button' className="btn btn-danger w-50 rounded-0" onClick={handleCancel}>Cancel</button>
                        <button type='submit' className="btn btn-success w-50 rounded-0" >Change Password</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default ChangePW;