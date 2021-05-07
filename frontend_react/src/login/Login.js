import React, { useState } from 'react'
import { connect } from 'react-redux'
import apiService from '../services/apiService'
import PopMessage from '../popMessage/PopMessage'
import './login.scss'

function Registration({ }) {
    const [titleError, setTitleError] = useState('')
    const [passwordError, setDueDateError] = useState('')

    const initialValues = {
        username: '',
        password: '',
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

    const handleOnClick = async () => {
        if (values.username.length < 4) {
            setTitleError('username must have at leat 4 characters ')
        }
        if (values.password.length < 6) {
            passwordError('username must have at leat 6 characters')
        }
        else {
            const responseFromBE = await apiService.req(
                'POST',
                '/login',
                {
                    username: values.username,
                    password: values.password
                },
                false
            )
            if (await responseFromBE.token) {
                localStorage.setItem('token', await responseFromBE.token)
                window.location.href = '/todos/allTodos';
            }
            else {
                setTitleError('incorrect username or password')
            }

        }
    }

    return (
        <div className="loginBox">
            <PopMessage />
            <div className="formBox">
                <div className="leftBox">
                    <h2>SIGN IN!</h2>
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
                        <p className="errorMessage">{passwordError}</p>
                    </label>
                    <button className="okButton" type="button" onClick={() => handleOnClick()}>SIGN UP!</button>
                    <button className="cancelButton" onClick={() => ""} >CANCEL</button>
                </form>
            </div>
        </div>
    )
}

export default connect(null, null)(Registration)
