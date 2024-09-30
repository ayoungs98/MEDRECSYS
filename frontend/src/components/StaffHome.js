import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function StaffHome() {

    const { state } = useLocation();
    const navigate = useNavigate();

    let user = {
        FIRST_NAME: state.FIRST_NAME,
        LAST_NAME: state.LAST_NAME,
        EMAIL: state.EMAIL,
        ID: state.ID,
        ROLE: state.ROLE,
    }; 
    
    const handlePatientLookup = () => {
        navigate('/patientLookup', { state : user });
    }

    const handleLogout = () => {
        navigate('/login');
    }

    const handlePassowrd = () => {
        navigate('/changePW', { state : user });
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">   
                <div className="bg-white p-3 rounded">
                    <h1>Staff Home Page</h1>
                    <h2> Hello {user.FIRST_NAME} {user.LAST_NAME}</h2><br/>
                    <div>
                        <button type='button' className="btn btn-success w-35 rounded-0" onClick={handlePatientLookup}>Patient Lookup</button>
                        <button type='button'  className="btn btn-danger w-35 rounded-0" onClick={handlePassowrd}>Change Password</button>
                        <button type="button"  className="btn btn-warning w-35 rounded-0" onClick={handleLogout}>Logout</button>
                    </div>
                </div>         
        </div>
    )
}

export default StaffHome