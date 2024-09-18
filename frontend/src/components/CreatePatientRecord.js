import { useState } from 'react';
import dataSource from './dataSource.js'

function CreatePatientRecord() {

    const [inputs, setInputs] = useState({
        recordId: '',
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

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]:[e.target.value]})
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
      }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary">
        <div className="bg-white p-3 rounded w-25">
            <h2>Create Patient Record</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='recordId'><strong>Enter the patien's Record ID:</strong></label>
                        <input type="number" name="recordId" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor='heightFeet'><strong>Enter the patient's Height (feet):</strong></label>
                        <input type="number" name="heightFeet" onChange={(e) => handleChange(e)}/>
                    
                </div>
                <div>
                    <label htmlFor='heightInch'><strong>Enter the patient's Height (inchs):</strong></label>
                        <input type="number" name="heightInch" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor='weight'><strong>Enter the patient's weight:</strong></label>
                        <input type="number" name="weight" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor='sex'><strong>Select the patient's sex:</strong></label>
                    <br/>
                    <select name='sex' id='sex' onChange={(e) => handleChange(e)}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                      
                </div>
                <div>
                    <label htmlFor='age'><strong>Enter the patient's age:</strong></label>
                        <input 
                        type="number" 
                        name="age"  
                        onChange={(e) => handleChange(e)}
                        />
                </div>
                <div>
                    <label htmlFor='dob'><strong>Enter the patient's date of birth:</strong></label>
                        <input 
                        type="text" 
                        name="dob" 
                        onChange={(e) => handleChange(e)}
                        />
                </div>
                <div>
                    <label htmlFor='address'><strong>Enter the patient's street address:</strong></label>
                        <input 
                        type="text" 
                        name="address" 
                        onChange={(e) => handleChange(e)}
                        />
                </div>
                <div>
                    <label htmlFor='city'><strong>Enter the patient's city:</strong></label>
                        <input 
                        type="text" 
                        name="city" 
                        onChange={(e) => handleChange(e)}
                        />
                </div>
                <div>
                    <label htmlFor='state'><strong>Enter the patient's state:</strong></label>
                        <input 
                        type="text" 
                        name="state" 
                        onChange={(e) => handleChange(e)}
                        />
                </div>
                <div>
                    <label htmlFor='zip'><strong>Enter the patient's zip code:</strong></label>
                        <input 
                        type="number" 
                        name="zip" 
                        onChange={(e) => handleChange(e)}
                        />
                </div>
                <div>
                    <label htmlFor='notes'><strong>Enter any patient's notes:</strong></label>
                    <input 
                        type="text" 
                        name="notes" 
                        onChange={(e) => handleChange(e)}
                        />
                </div>
                <div>
                    <label htmlFor='history'><strong>Enter patient's medical history:</strong></label>
                        <input 
                        type="text" 
                        name="history" 
                        onChange={(e) => handleChange(e)}
                        />
                </div>
                <div>
                    <label htmlFor='testResults'><strong>Enter patient's test Results:</strong></label>
                        <input 
                        type="text" 
                        name="testResults" 
                        onChange={(e) => handleChange(e)}
                        />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    </div>
    )
}

export default CreatePatientRecord


/*

 
*/