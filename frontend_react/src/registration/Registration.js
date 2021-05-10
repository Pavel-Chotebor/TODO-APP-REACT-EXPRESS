import React, { useState } from 'react'
import { connect } from 'react-redux'
import apiService from '../services/apiService'
import { setUsername, setPassword, setPasswordToRepeat } from '../actions/userActions'
import { setMessage } from '../actions/popUpMessageActions'
import {
    BrowserRouter as Router,
    useHistory,
} from "react-router-dom";
import Input from '../common/Input'
import UserForm from '../common/UserForm'

function Registration({ setUsername, setPassword, setPasswordToRepeat, userInput }) {
    let history = useHistory();
    const [registerError, setRegisterError] = useState('')

    const handleOnSubmit = async () => {
        const areInputsValid = Object.values(userInput).every(input => input.isValid)
        if (areInputsValid) {
            const responseFromBE = await apiService.req(
                'POST',
                '/register',
                {
                    username: userInput.username.value,
                    password: userInput.password.value,
                },
                false
            )
            if (responseFromBE.status === 'error') {
                setRegisterError('username already exist')
            }
            else {
                history.push("/login")
                setMessage('Account successfully created')
            }
        }
        else if (userInput.passwordToRepeat.value && !userInput.passwordToRepeat.isValid) {
            setRegisterError('password does not match')
        }
        else {
            setRegisterError('all fields required')
        }
    }

    return (
        <UserForm
            name={'SIGN UP'}
            userInput={userInput}
            error={registerError}
            handleOnSubmit={handleOnSubmit}
        >
            <Input
                minLength={1}
                type={'text'}
                name={'username'}
                method={setUsername}
            />
            <Input
                minLength={8}
                type={'password'}
                name={'password'}
                method={setPassword}
            />
            <Input
                type={'password'}
                name={'repeat password'}
                method={setPasswordToRepeat}
            />
        </UserForm>
    )
}

const mapStateToProps = (store) => {
    console.log(store.userValues)
    return {
        userInput: store.userValues,
    }
}

export default connect(mapStateToProps, { setMessage, setUsername, setPassword, setPasswordToRepeat })(Registration)
