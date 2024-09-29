import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react";
import dataSource from "./dataSource";

function CreateAccount() {

    const passwordInputRef = useRef();
    const password2InputRef = useRef();
    let response;

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const pw = passwordInputRef.current.value;
        const pw2 =password2InputRef.current.value;

        // checks to make sure the password is put in 2 times and match.
        if (pw !== pw2) {
            alert("Passwords do not match");
        } else {
            const hashedPW = bcrypt.hashSync(pw, 13)

            let user = {
            FIRST_NAME: e.target.FIRST_NAME.value,
            LAST_NAME: e.target.LAST_NAME.value,
            EMAIL: e.target.EMAIL.value,
            PASSWORD: hashedPW,
            ROLE: "P",
            };

            let res;
            res = await dataSource.get('/login/email/' + user.EMAIL );
            response = res.data[0];

            if(response.length === 0) {
                response = await dataSource.post('/login/create', user );
                console.log(response.status);
                navigate("/login");
            } else {
                alert("Email already in used");
             };

        };
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Create Account</h2>
                <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label htmlFor="FIRST_NAME"> <strong>First Name </strong></label>
                        <input type="text" placeholder="Enter First Name" name="FIRST_NAME"
                        className="form-control rounded-0" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LAST_NAME"> <strong>Last Name </strong></label>
                        <input type="text" placeholder="Enter Last Name" name="LAST_NAME"
                        className="form-control rounded-0" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="EMAIL"> <strong>Email </strong></label>
                        <input type="email" placeholder="Enter Email" name="EMAIL"
                        className="form-control rounded-0" required></input>
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
                    <button type="submit" className="btn btn-success w-100 rounded-0">Create Account</button>
                    <p></p>
                    <Link to="/" className="btn btn-default border w-100 rounded-0 text-decoration-none">Login</Link>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount


/*
    const [values, setValues] = useState({
        FIRST_NAME: "",
        LAST_NAME: "",
        EMAIL: "",
        PASSWORD: "",
        ROLE: "P",
    });

const handleInput =(e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }

*/