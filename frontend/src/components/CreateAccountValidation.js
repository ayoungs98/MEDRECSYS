function Validation(values) {
    let error = {}
    // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.first_name === "") {
        error.first_name = "First name should not be empty"
    }
    else {
        error.first_name = ""
    }
    
    if(values.last_name === "") {
        error.last_name = "Last name should not be empty"
    }
    else {
        error.last_name = ""
    }
    
    if(values.email === "") {
        error.email = "Email should not be empty"
    }
    else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else {
        error.password = ""
    }
    return error;

}

export default Validation;