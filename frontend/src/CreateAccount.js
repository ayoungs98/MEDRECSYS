import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./CreateAccountValidation";
import axios from "axios";

function CreateAccount() {
    
    const [values, setValues] = useState({
        FIRST_NAME: "",
        LAST_NAME: "",
        EMAIL: "",
        PASSWORD: "",
        ROLE: "P",
        RECORD_ID: null
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        console.log(values);
        if(errors.first_name === "" && errors.last_name === "" && errors.email === "" && errors.password === "") {
            axios.post("http://localhost:5000/login/create", values)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Create Account</h2>
                <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label htmlFor="FIRST_NAME"> <strong>First Name </strong></label>
                        <input type="text" placeholder="Enter First Name" name="FIRST_NAME"
                        onChange={handleInput} className="form-control rounded-0"></input>
                        {errors.first_name && <span className="text-danger"> {errors.first_name}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LAST_NAME"> <strong>Last Name </strong></label>
                        <input type="text" placeholder="Enter Last Name" name="LAST_NAME"
                        onChange={handleInput} className="form-control rounded-0"></input>
                        {errors.last_name && <span className="text-danger"> {errors.last_name}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="EMAIL"> <strong>Email </strong></label>
                        <input type="email" placeholder="Enter Eamil" name="EMAIL"
                        onChange={handleInput} className="form-control rounded-0"></input>
                        {errors.email && <span className="text-danger"> {errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="PASSWORD"><strong>Password </strong></label>
                        <input type="password" placeholder="Enter Password" name="PASSWORD"
                        onChange={handleInput} className="form-control rounded-0"></input>
                        {errors.password && <span className="text-danger"> {errors.password}</span>}
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