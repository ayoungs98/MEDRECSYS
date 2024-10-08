import React from "react";
import Login from "./components/login";
import CreateAccount from "./components/CreateAccount";
import SysAdminHome from "./components/SysAdminHome";
import StaffHome from "./components/StaffHome";
import PatientHome from "./components/PatientHome";
import CreateRecord from "./components/CreatePatientRecord";
import EditRecord from "./components/EditRecord";
import PatientRecord from "./components/PatientRecord";
import ChangePW from "./components/ChangePW";
import UpdateAccount from "./components/UpdateAccount";
import PatientLookup from "./components/PatientLookup";
import NoPage from "./components/NoPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/createAccount' element={<CreateAccount />}></Route>
                <Route path='/systemAdmin' element={<SysAdminHome />}> </Route>
                <Route path='/staffHome' element={<StaffHome />}> </Route>
                <Route path='/patientHome' element={<PatientHome />}> </Route>
                <Route path='/createRecord' element={<CreateRecord />}> </Route>
                <Route path='/editRecord' element={<EditRecord />}> </Route>
                <Route path='/patientRecord' element={<PatientRecord /> }> </Route>
                <Route path='/changePW' element={<ChangePW /> }> </Route>
                <Route path='/updateAccount' element={<UpdateAccount /> }> </Route>
                <Route path='/patientLookup' element={<PatientLookup /> }> </Route>
                <Route path='*' element={<NoPage /> }> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App