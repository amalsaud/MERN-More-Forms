import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        (e.target.value.length < 2) ? setFirstNameError("First name must be at least 2 characters!") : setFirstNameError("")
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        (e.target.value.length < 2) ? setLastNameError("Last name must be at least 2 characters!") : setLastNameError("")
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        (e.target.value.length < 5) ? setEmailError("Email must be at least 5 characters!") : setEmailError("")
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        (e.target.value.length < 8) ? setPasswordError("Password must be at least 8 characters!") : setPasswordError("")
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmPasswordError("Confirm must be at least 8 characters!")
        }
        else if (e.target.value.length != password) {
            setConfirmPasswordError("Passwords must match!")
        }
        else {
            setConfirmPasswordError("")
        }
    }

    return (
        <div className='container'>
            <form onSubmit={createUser} className='form'>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => handleFirstName(e)} />
                    {
                        firstNameError ?
                            <small>{firstNameError}</small> : ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => handleLastName(e)} />
                    {
                        lastNameError ?
                            <small>{lastNameError}</small> : ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => handleEmail(e)} />
                    {
                        emailError ?
                            <small>{emailError}</small> : ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => handlePassword(e)} />
                    {
                        passwordError ?
                            <small>{passwordError}</small> : ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => handleConfirmPassword(e)} />
                    {
                        confirmPasswordError ?
                            <small>{confirmPasswordError}</small> : ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};

export default UserForm;
