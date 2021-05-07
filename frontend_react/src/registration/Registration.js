import React, { useState } from 'react'
import { connect } from 'react-redux'
import apiService from '../services/apiService'
import { setMessage } from '../actions/popUpMessageActions'
import {
    BrowserRouter as Router,
    useHistory,
} from "react-router-dom";
import './registration.scss'

function Registration({ setMessage }) {
    let history = useHistory();
    const [titleError, setTitleError] = useState('')
    const [dueDateError, setDueDateError] = useState('')

    const initialValues = {
        username: '',
        password: '',
        passwordToRepeat: '',
    }

    const [values, setValues] = useState(initialValues);
    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleOnClick = () => {
        if (values.username.length < 4) {
            setTitleError('username must have at leat 4 characters ')
        }
        if (values.password.length < 6) {
            setDueDateError('username must have at leat 6 characters')
        }
        if (values.password != values.passwordToRepeat) {
            setDueDateError('passwords does not match')
        }
        else {
            const responseFromBE = apiService.req(
                'POST',
                '/register',
                {
                    username: values.username,
                    password: values.password
                },
                false
            )
            if(! responseFromBE.error) {
                history.push("/login")
                setMessage('ACCOUNT SUCCESSFULLY CREATED')
            }
            else {
                setTitleError('username already exist ')
            }
        }
    }

    return (
        <div className="registrationBox">
            <div className="formBox">
                <div className="leftBox">
                    <h2>SIGN UP!</h2>
                </div>
                <form method="post">
                    <label>
                        <input
                            type="text"
                            maxLength="20"
                            placeholder={"username"}
                            onChange={handleInputChange}
                            value={values.title}
                            name="username"
                        />
                        <p className="errorMessage">{titleError}</p>
                    </label>
                    <label>
                        <input
                            type="password"
                            maxLength="70"
                            placeholder={"password"}
                            onChange={handleInputChange}
                            value={values.description}
                            name="password"
                        />
                    </label>
                    <label>
                        <input
                            placeholder={"repeat password"}
                            type="password"
                            onChange={handleInputChange}
                            value={values.dueDate}
                            name="passwordToRepeat"
                        />
                        <p className="errorMessage">{dueDateError}</p>
                    </label>
                    <button className="okButton" type="button" onClick={() => handleOnClick()}>SIGN UP!</button>
                    <button className="cancelButton" onClick={() => ""} >CANCEL</button>
                </form>
            </div>
        </div>
    )
}

export default connect(null, { setMessage })(Registration)
