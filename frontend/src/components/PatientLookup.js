import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import dataSource from "./dataSource";

function PatientLookup () {

    const { state } = useLocation();
    const navigate = useNavigate();
    let res;
    let response;

    let user = {
        FIRST_NAME: state.FIRST_NAME,
        LAST_NAME: state.LAST_NAME,
        EMAIL: state.EMAIL,
        ID: state.ID,
        ROLE: state.ROLE,
    };    

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [role, setRole] = useState('');
    const [height_Feet, setHeight_feet] = useState('');
    const [height_inch, setHeight_inch] = useState('');
    const [weight, setWeight] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [statee, setState] = useState('');
    const [zip, setZip] = useState('');
    const [notes, setNotes] = useState('');
    const [histoty, setHistory] = useState('');
    const [testResults, setTestResults] = useState('');

    let patient = {
        FIRST_NAME: first_name,
        LAST_NAME: last_name,
        EMAIL: email,
        ID: id,
        ROLE: role,
    };

    let record = {
        RECORD_ID: id,
        HEIGHT_FEET: height_Feet,
        HEIGHT_INCH: height_inch,
        WEIGHT: weight,
        SEX: sex,
        AGE: age,
        DOB: dob,
        ADDRESS: address,
        CITY: city,
        STATE: statee,
        ZIP: zip,
        NOTES: notes,
        HISTORY: histoty,
        TEST_RESULTS: testResults,
    }

    const handlePatientLookup = async () => {
        
        res = await dataSource.get('/login/email/' + patient.EMAIL );
        response = res.data[0];
        if(response === undefined) {
            alert("Account with email: " + patient.EMAIL +  " not found");
        } else {

            setFirst_name(response.FIRST_NAME);
            setLast_name(response.LAST_NAME);
            setEmail(response.EMAIL)
            setRole(response.ROLE);
            setId(response.ID);

            switch (response.ROLE){
                case "P":
                case "p":
                    let lookup = await dataSource.get('/record/record_id/' + response.ID );
                    let data = lookup.data[0];
        
                    setHeight_feet(data.HEIGHT_FEET);
                    setHeight_inch(data.HEIGHT_INCH);
                    setWeight(data.WEIGHT);
                    setSex(data.SEX);
                    setAge(data.AGE);
                    setDob(data.DOB);
                    setAddress(data.ADDRESS);
                    setCity(data.CITY);
                    setState(data.STATE);
                    setZip(data.ZIP);
                    setNotes(data.NOTES);
                    setHistory(data.HISTORY);
                    setTestResults(data.TEST_RESULTS);
                    break;
                default:
                    alert("Not a patient account!")
                    break;
            }
        }
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        let res;
        res = await dataSource.put('/record/update/', record );
        console.log(res.status)
        if (res.status === 200)
        {alert("Patient's record updated.")}
       navigate("/staffHome", { state : user });
        
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/staffHome", { state : user });
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary">
            <form>
                <div className="bg-white p-3 rounded">
                <h1>Patient Lookup</h1> <br/>
                <div>
                    <h5>Search for by Patient's Email</h5>
                    <Row>
                        <Col>
                            <label htmlFor='email'>Email:</label><br/>
                            <input type="text" className='from-control' name='email' onChange={(e) => patient = {...patient, EMAIL: e.target.value}} required></input>
                        </Col>
                    </Row><br/>
                        <button type='button' className='btn btn-success w-25 rounded-0' onClick={handlePatientLookup}>Search</button>
                </div>
                <h5>Patient's Record:</h5>
                    <Row>
                        <Col>
                            <label htmlFor="first_name">First Name</label>
                            <p>{patient.FIRST_NAME}</p>
                        </Col>
                        <Col>
                            <label htmlFor="last_name">Last Name</label>
                            <p>{patient.LAST_NAME}</p>
                        </Col>
                        <Col>
                            <label htmlFor="recordId">Record ID</label>
                            <p>{record.RECORD_ID}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="heightFeet">Height(Feet)</label>
                            <input type="text" className="form-control" id="heightFeet" name="heightFeet" defaultValue={record.HEIGHT_FEET} onChange={(e) => setHeight_feet(e.target.value)} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="heightInch">Height(inchs)</label>
                            <input type="text" className="form-control" id="heightInch" name="heightinch" defaultValue={record.HEIGHT_INCH} onChange={(e) => setHeight_inch(e.target.value)} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="weight">Weight</label>
                            <input type="text" className="form-control" id="weight" name="weight" defaultValue={record.WEIGHT} onChange={(e) => setWeight(e.target.value)} ></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="dob">Date of birth</label>
                            <input type="text" className="form-control" id="dob" name="dob" defaultValue={record.DOB} onChange={(e) => setDob(e.target.value)} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="sex">sex</label>
                            <input type="text" className="form-control" id="sex" name="sex" defaultValue={record.SEX} onChange={(e) => setSex(e.target.value)} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="age">age</label>
                            <input type="text" className="form-control" id="age" name="age" defaultValue={record.AGE} onChange={(e) => setAge(e.target.value)} ></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="address">address</label>
                            <input type="text" className="form-control" id="address" name="address" defaultValue={record.ADDRESS} onChange={(e) => setAddress(e.target.value)} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="city">city</label>
                            <input type="text" className="form-control" id="city" name="city" defaultValue={record.CITY} onChange={(e) => setCity(e.target.value)} ></input>
                        </Col>
                        <Col>
                            <label htmlFor="state">state</label>
                            <input type="text" className="form-control" id="state" name="state" defaultValue={record.STATE} onChange={(e) => setState(e.target.value)} ></input>
                        </Col>
                    </Row>
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" name="zip" style={{width: "100px"}} defaultValue={record.ZIP} onChange={(e) => setZip(e.target.value)} ></input><br/>

                    <label htmlFor="notes">Notes</label>
                    <textarea className="form-control" id="notes" name='notes' defaultValue={record.NOTES} rows='5' cols={1} onChange={(e) => setNotes(e.target.value)}></textarea><br/>

                    <label htmlFor="history">History</label>
                    <textarea className="form-control" id="history" name="history" defaultValue={record.HISTORY} rows='5' cols={1} onChange={(e) => setHistory(e.target.value)} ></textarea><br/>
                    
                    <label htmlFor="testResults">Test Results</label>
                    <textarea className="form-control" id="testResults" name="testResults" defaultValue={record.TEST_RESULTS} rows='5' cols={1} onChange={(e) => setTestResults(e.target.value)} ></textarea><br/>
                </div>
                <div className="d-grid gap-2 d-md-flex">
                <button type='button' onClick={handleEdit} className='btn btn-success w-25 rounded-0'>Update</button>
                <button type='button' onClick={handleCancel} className="btn btn-danger w-25 rounded-0 ">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default PatientLookup;


/*

              
*/