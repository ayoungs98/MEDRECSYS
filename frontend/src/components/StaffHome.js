import React, { useState} from 'react';
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function StaffHome() {

    const [patient, setPatient] = useState({
        first_name: '',
        last_name: '',
        dob: '',
    })

    const handleChange = (e) => {
        setPatient({...patient, [e.target.name] : [e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(patient)
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary">   
            <form onSubmit={handleSubmit}>
                <div className="bg-white p-3 rounded">
                    <h1>Staff Home Page</h1>
                        <p>Search for Patient</p>
                        <Row>
                            <Col>
                            <label htmlFor='first_name'>Frist name:</label><br/>
                            <input type="text" className='from-control' name='first_name' onChange={handleChange}></input>
                            </Col>
                            <Col>
                            <label htmlFor='last_name'>Last Name:</label><br/>
                            <input type="text" className='from-control' name='last_name' onChange={handleChange}></input>
                            </Col>
                            <Col>
                            <label htmlFor='dob'>Date of Birth:</label><br/>
                            <input type="text" className='from-control' name='dob' onChange={handleChange}></input>
                            </Col>
                        </Row><br/>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </div>
            </form>
            
            
            
        </div>
    )
}

export default StaffHome