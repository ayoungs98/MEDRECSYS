import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const EditRecords = (props) => {

    const [record, setRecord] = useState({
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
    })

    const handleChange = (e) => {
        setRecord({...record, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(record)
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary">
            <form onSubmit={handleSubmit}>
                <div className="bg-white p-3 rounded">
                <h1>Edit Record</h1> <br/>
                    <Row>
                        <Col>
                            <label htmlFor="first_name">First Name</label>
                            <p>{record.first_name}</p>
                        </Col>
                        <Col>
                            <label htmlFor="last_name">Last Name</label>
                            <p>{record.last_name}</p>
                        </Col>
                        <Col>
                            <label htmlFor="recordId">Record ID</label>
                            <input type="text" className="form-control" id="recordId" name="recordId" defaultValue={record.recordId} onChange={handleChange} ></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="heightFeet">Height(Feet)</label>
                            <input type="text" className="form-control" id="heightFeet" name="heightFeet" defaultValue={record.heightFeet} onChange={handleChange} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="heightInch">Height(inchs)</label>
                            <input type="text" className="form-control" id="heightInch" name="heightinch" defaultValue={record.heightInch} onChange={handleChange} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="weight">Weight</label>
                            <input type="text" className="form-control" id="weight" name="weight" defaultValue={record.weight} onChange={handleChange} ></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="dob">Date of birth</label>
                            <input type="text" className="form-control" id="dob" name="dob" defaultValue={record.dob} onChange={handleChange} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="sex">sex</label>
                            <input type="text" className="form-control" id="sex" name="sex" defaultValue={record.sex} onChange={handleChange} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="age">age</label>
                            <input type="text" className="form-control" id="age" name="age" defaultValue={record.age} onChange={handleChange} ></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="address">address</label>
                            <input type="text" className="form-control" id="address" name="address" defaultValue={record.address} onChange={handleChange} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="city">city</label>
                            <input type="text" className="form-control" id="city" name="city" defaultValue={record.city} onChange={handleChange} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="state">state</label>
                            <input type="text" className="form-control" id="state" name="state" defaultValue={record.state} onChange={handleChange} ></input>
                        </Col>
                    </Row>
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" name="zip" style={{width: "100px"}} defaultValue={record.zip} onChange={handleChange} ></input><br/>

                    <label htmlFor="notes">Notes</label>
                    <textarea className="form-control" id="notes" name='notes' defaultValue={record.notes} rows='5' cols={1} onChange={handleChange}></textarea><br/>

                    <label htmlFor="history">History</label>
                    <textarea className="form-control" id="history" name="history" defaultValue={record.history} rows='5' cols={1} onChange={handleChange} ></textarea><br/>
                    
                    <label htmlFor="testResults">Test Results</label>
                    <textarea className="form-control" id="testResults" name="testResults" defaultValue={record.testResults} rows='5' cols={1} onChange={handleChange} ></textarea><br/>
                </div>
                <div className="d-grid gap-2 d-md-flex">
                <button type='submit' className='btn btn-success w-25 rounded-0'>Update</button>
                <button type='button' className="btn btn-danger w-25 rounded-0 ">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditRecords


/*

*/