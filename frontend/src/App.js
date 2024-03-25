import React from "react";
import Login from "./login";
import CreateAccount from "./CreateAccount";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/createAccount' element={<CreateAccount />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App