import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import dataSource from './dataSource.js'

function CreatePatientRecord(props) {

    const [inputs, setInputs] = useState({
        heightFeet: '',
        heightInch: '',
        weight: '',
        sex: 'male',
        age: '',
        dob: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        notes: '',
        history: '',
        testResults: '',
    });

    let names = {
        first_name: 'Bob',
        last_name: 'Smith',
        recordId: '1',
    }

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]:[e.target.value]})
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
      }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary">
        <form onSubmit={handleSubmit}>
            <div className="bg-white p-3 rounded">
            <h1>Create Patient Record</h1><br/>
                <Row>
                    <Col>
                        <label htmlFor="first_name">First Name</label>
                        <p>{names.first_name}</p>
                    </Col>
                    <Col>
                        <label htmlFor="last_name">Last Name</label>
                        <p>{names.last_name}</p>
                    </Col>
                    <Col>
                        <label htmlFor="recordId">Record ID</label>
                        <p>{names.recordId}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor="heightFeet">Height(Feet)</label>
                        <input type="text" className="form-control" id="heightFeet" name="heightFeet"  onChange={handleChange} ></input>
                    </Col>
                    <Col>
                        <label htmlFor="heightInch">Height(inchs)</label>
                        <input type="text" className="form-control" id="heightInch" name="heightInch"  onChange={handleChange} ></input>
                    </Col>
                    <Col>
                        <label htmlFor="weight">Weight</label>
                        <input type="text" className="form-control" id="weight" name="weight" onChange={handleChange} ></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor="dob">Date of birth</label>
                        <input type="text" className="form-control" id="dob" name="dob"  onChange={handleChange} ></input>
                    </Col>
                    <Col>
                        <label htmlFor='sex'>Select the patient's sex:</label><br/>
                        <select name='sex' id='sex' onChange={(e) => handleChange(e)}>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select> 
                    </Col>
                    <Col>
                        <label htmlFor="age">age</label>
                        <input type="text" className="form-control" id="age" name="age"  onChange={handleChange} ></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor="address">address</label>
                        <input type="text" className="form-control" id="address" name="address"  onChange={handleChange} ></input>
                    </Col>
                    <Col>
                        <label htmlFor="city">city</label>
                        <input type="text" className="form-control" id="city" name="city"  onChange={handleChange} ></input>
                    </Col>
                    <Col>
                        <label htmlFor="state">state</label>
                        <input type="text" className="form-control" id="state" name="state"  onChange={handleChange} ></input>
                    </Col>
                </Row>
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="zip" name="zip" style={{width: "100px"}}  onChange={handleChange} ></input><br/>

                <label htmlFor="notes">Notes</label>
                <textarea className="form-control" id="notes" name='notes'  rows='5' cols={1} onChange={handleChange}></textarea><br/>

                <label htmlFor="history">History</label>
                <textarea className="form-control" id="history" name="history"  rows='5' cols={1} onChange={handleChange} ></textarea><br/>
                
                <label htmlFor="testResults">Test Results</label>
                <textarea className="form-control" id="testResults" name="testResults"  rows='5' cols={1} onChange={handleChange} ></textarea><br/>
            </div>
            <div className="d-grid gap-2 d-md-flex">
            <button type='submit' className='btn btn-success w-25 rounded-0'>Submit</button>
            <button type='button' className="btn btn-danger w-25 rounded-0 ">Cancel</button>
            </div>
        </form>
    </div>
    )
}

export default CreatePatientRecord


/*
  <div className="d-flex justify-content-center align-items-center bg-primary">
            <form onSubmit={handleSubmit}>
                <h2>Create Patient Record</h2>
                <div className="bg-white p-3 rounded">
                <Row>
                    <Col>
                        <label htmlFor='recordId'>Enter the patien's Record ID:</label>
                        <input type="number" name="recordId" onChange={(e) => handleChange(e)}/>
                    </Col>
                    <Col>
                        <label htmlFor='heightFeet'>Enter the patient's Height (feet):</label>
                        <input type="number" name="heightFeet" onChange={(e) => handleChange(e)}/>
                    </Col>
                    <Col>
                        <label htmlFor='heightInch'>Enter the patient's Height (inchs):</label>
                        <input type="number" name="heightInch" onChange={(e) => handleChange(e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor='weight'>Enter the patient's weight:</label>
                        <input type="number" name="weight" onChange={(e) => handleChange(e)}/>
                    </Col>
                    <Col>
                        <label htmlFor='sex'>Select the patient's sex:</label>
                        <br/>
                        <select name='sex' id='sex' onChange={(e) => handleChange(e)}>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>                   
                    </Col>
                    <Col>
                        <label htmlFor='age'>Enter the patient's age:</label>
                        <input type="number" name="age" onChange={(e) => handleChange(e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor='dob'>Enter the patient's date of birth:</label>
                        <input type="text" name="dob" onChange={(e) => handleChange(e)}/>
                    </Col>
                    <Col>
                        <label htmlFor='address'>Enter the patient's street address:</label>
                        <input type="text" name="address" onChange={(e) => handleChange(e)}/>
                    </Col>
                    <Col>
                        <label htmlFor='city'>Enter the patient's city:</label>
                        <input type="text" name="city" onChange={(e) => handleChange(e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label htmlFor='state'>Enter the patient's state:</label>
                        <input type="text" name="state" onChange={(e) => handleChange(e)}/>
                    </Col>
                    <Col>
                        <label htmlFor='zip'>Enter the patient's zip code:</label>
                        <input type="number" name="zip" onChange={(e) => handleChange(e)}/>
                    </Col>
                </Row>     
                <div>
                    <label htmlFor='notes'>Enter any patient's notes:</label>
                    <input type="text" name="notes" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor='history'>Enter patient's medical history:</label>
                        <input type="text" name="history" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor='testResults'>Enter patient's test Results:</label>
                        <input type="text" name="testResults" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <br/>
                    <button type="submit">Submit</button>
                    <button type="button">Cancel</button>
                </div>
            </div>
        </form>
    </div>
*/