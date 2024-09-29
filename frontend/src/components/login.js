import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import dataSource from "./dataSource.js";
import bcrypt from "bcryptjs-react";

function Login() {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();
    let response;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailInputRef.current.value;
        const pw = passwordInputRef.current.value;

        // make call to DB
        let res;
        res = await dataSource.get('/login/email/' + email );
        response = res.data[0];
        
        // check to make sure email is on the DB
        if(response.length === 0) {
            alert("Username or Password does not match!")
        } else {
            const hashedPW = response.PASSWORD;
             // checks to make sure the password matches
            const isMatch = await bcrypt.compare(pw, hashedPW);
            if(!isMatch) {
                alert("Username or Password does not match!")
            } else {
                let user = {
                    FIRST_NAME: response.FIRST_NAME,
                    LAST_NAME: response.LAST_NAME,
                    EMAIL: response.EMAIL,
                    ID: response.ID,
                    ROLE: response.ROLE,
                }
                switch (response.ROLE) {
                    case "A":
                    case "a":
                        navigate("/systemAdmin", { state : user });
                        break;
                    case "E":
                    case "e":
                        navigate("/staffHome", { state : user });
                        break;
                    case "P":
                    case "p":
                        navigate("/patientHome", { state : user });
                        break;
                    default:
                        break;  
                };
            };

        }
      
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"> <strong>Email </strong></label>
                        <input type="email" placeholder="Enter Eamil" name="email"
                        ref={emailInputRef} className="form-control rounded-0" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password </strong></label>
                        <input type="password" placeholder="Enter Password" name="password"
                        ref={passwordInputRef} className="form-control rounded-0" required></input>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                    <p></p>
                    <Link to="/createAccount" className="btn btn-default border w-100 rounded-0 text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login

/*

*/