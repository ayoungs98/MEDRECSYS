import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dataSource from './dataSource.js'


function PatientHome() {

    const { state } = useLocation();
    const navigate = useNavigate();

    let user = {
        FIRST_NAME: state.FIRST_NAME,
        LAST_NAME: state.LAST_NAME,
        EMAIL: state.EMAIL,
        ID: state.ID,
        ROLE: state.ROLE,
    }

    const handleRecord = async () => {
        let res;
        res = await dataSource.get('/record/record_id/' + state.ID );
        const hasData = (res.data.length !== 0);
        if(hasData) {
            navigate('/patientRecord', { state : user })
        } else {
            alert("You do not have a record!");
        };       
    };

    const handleCreate = async () => {
        let res;
        res = await dataSource.get('/record/record_id/' + state.ID );
        const hasData = (res.data.length !== 0);
        if(!hasData) {
            navigate('/createRecord', { state : user });
        } else {
            alert("You have a record already!");
        };

    };

    const handlePassowrd = () => {
        navigate('/changePW', { state : user });
    };

    const handleLogout = () => {
        navigate('/login');
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-50">
            <h1>Patient Home</h1><br/>
            <h2>Hello {state.FIRST_NAME} {state.LAST_NAME}</h2><br/>

            <button type='button'  className="btn btn-primary w-50 rounded-0" onClick={handleRecord}>View Record</button>
            <button type='button'  className="btn btn-secondary w-50 rounded-0" onClick={handleCreate}>Create Record</button>
            <button type='button'  className="btn btn-danger w-50 rounded-0" onClick={handlePassowrd}>Change Password</button>
            <button type="button"  className="btn btn-warning w-50 rounded-0" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default PatientHome