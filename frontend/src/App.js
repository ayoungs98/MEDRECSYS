import React from "react";
import Login from "./components/login";
import CreateAccount from "./components/CreateAccount";
import SysAdminHome from "./components/SysAdminHome";
import StaffHome from "./components/StaffHome";
import PatientHome from "./components/PatientHome";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/createAccount' element={<CreateAccount />}></Route>
                <Route path='/systemAdmin' element={<SysAdminHome />}> </Route>
                <Route path='/staffHome' element={<StaffHome />}> </Route>
                <Route path='/patientHome' element={<PatientHome />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App