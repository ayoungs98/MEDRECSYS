import React from 'react';
import { Row, Col } from "react-bootstrap";
import dataSource from './dataSource.js'

function PatientRecord(props) {

    let patient = {
        first_name: 'John',
        last_name: 'Smith',
        recordId: '1',
        heightFeet: '5',
        heightInch: '5',
        weight: '155',
        sex: 'male',
        age: '24',
        dob: '01/01/2000',
        address: '12345 street',
        city: 'temp town',
        state: 'TT',
        zip: '54321',
        notes: 'some notes',
        history: 'some history',
        testResults: 'none',
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(patient)
      }

    return (
         <div className="d-flex justify-content-center align-items-center bg-primary">
        <form onSubmit={handleSubmit}>    
            <div className="bg-white p-3 rounded" style={{width: "600px"}}>
            <h1>Patient Record</h1><br/>
                <Row>
                    <Col>
                        <label htmlFor="first_name">First Name</label>
                        <p >{patient.first_name}</p>
                    </Col>
                    <Col>
                        <label htmlFor="last_name">Last Name</label>
                        <p >{patient.last_name}</p>
                    </Col>
                    <Col>
                        <label htmlFor="recordId">Record ID</label>
                        <p >{patient.recordId}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor="heightFeet">Height(Feet)</label>
                        <p>{patient.heightFeet}</p>
                    </Col>
                    <Col>
                        <label htmlFor="heightInch">Height(inchs)</label>
                        <p>{patient.heightInch}</p>                    </Col>
                    <Col>
                        <label htmlFor="weight">Weight</label>
                        <p>{patient.weight}</p>                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor="dob">Date of birth</label>
                        <p>{patient.dob}</p>                    </Col>
                    <Col>
                        <label htmlFor='sex'>Sex:</label><br/>
                        <p>{patient.sex}</p>                    </Col>
                    <Col>
                        <label htmlFor="age">age</label>
                        <p>{patient.age}</p>                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor="Address">address</label>
                        <p>{patient.address}</p>                    </Col>
                    <Col>
                        <label htmlFor="City">city</label>
                        <p>{patient.city}</p>                    </Col>
                    <Col>
                        <label htmlFor="State">state</label>
                        <p>{patient.state}</p>                    </Col>
                </Row>
                <label htmlFor="Zip">Zip</label>
                <p style={{width: "100px"}}>{patient.zip}</p>

                <label htmlFor="notes">Notes</label>
                <textarea className="form-control" id="notes" name='notes'  rows='4' cols={1} defaultValue={patient.notes}></textarea><br/>
                <label htmlFor="history">History</label>
                <textarea className="form-control" id="history" name="history"  rows='4' cols={1} defaultValue={patient.history} ></textarea><br/>
                
                <label htmlFor="testResults">Test Results</label>
                <textarea className="form-control" id="testResults" name="testResults"  rows='4' cols={1} defaultValue={patient.testResults} ></textarea><br/>
            </div>
            <div className="d-grid gap-2 d-md-flex">
            <button type='button' className='btn btn-success w-25 rounded-0'>Home</button>
            <button type='submit' className='btn btn-danger w-25 rounded-0'>Edit</button>
            </div>
        </form>
    </div>
    )
}

export default PatientRecord