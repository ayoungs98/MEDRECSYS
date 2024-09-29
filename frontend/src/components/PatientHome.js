import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dataSource from './dataSource.js'


function PatientHome() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const handleRecord = async () => {

        let res;
        res = await dataSource.get('/record/record_id/' + state.ID );
        const hasData = (res.data.length !== 0);
        if(hasData) {
            navigate('/patientRecord', { state : state })
        } else {
            alert("You do not have a record!");
        };       
    };

    const handleCreate = async () => {

        let res;
        res = await dataSource.get('/record/record_id/' + state.ID );
        const hasData = (res.data.length !== 0);
        if(!hasData) {
            navigate('/createRecord', { state : state });
        } else {
            alert("You have a record already!");
        };

    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-50">
            <h1>PatientHome</h1><br/>
            <h2>Hello {state.FIRST_NAME} {state.LAST_NAME}</h2>

            <button type='submit' onClick={handleRecord}>View Record</button>
            <button type='submit' onClick={handleCreate}>Create Record</button>
            </div>
        </div>
    )
}

export default PatientHome