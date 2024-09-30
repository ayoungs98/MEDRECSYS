import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function SysAdminHome() {

    const { state } = useLocation();
    const navigate = useNavigate();

    let user = {
        FIRST_NAME: state.FIRST_NAME,
        LAST_NAME: state.LAST_NAME,
        EMAIL: state.EMAIL,
        ID: state.ID,
        ROLE: state.ROLE,
    };

    const handleCraeteAccount = () => {
        navigate('/createAccount');
    };

    const handleUpddateAccount = () => {
        navigate('/updateAccount', { state : user });
    };

    const handlePassowrd = () => {
        navigate('/changePW', { state : user });
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">   
        <form>
            <div className="bg-white p-3 rounded">
                <h1>System Admin Home Page</h1>
                <h2> Hello {user.FIRST_NAME} {user.LAST_NAME}</h2><br/>
                <button type="button" className="btn btn-success w-30 rounded-0" onClick={handleCraeteAccount}>Create Account</button>
                <button type="button" className="btn btn-warning w-30 rounded-0" onClick={handleUpddateAccount}>Update Account</button>
                <button type="button" className="btn btn-success w-30 rounded-0" onClick={handlePassowrd}>Change Passord</button>
                <button type="button" className="btn btn-warning w-30 rounded-0" onClick={handleLogout}>Logout</button>
            </div>
        </form>          
    </div>
    )
}

export default SysAdminHome