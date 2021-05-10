import React, { useState } from 'react'
import { connect } from 'react-redux'
import apiService from '../services/apiService'
import { setUsername, setPassword } from '../actions/userActions'
import Input from '../common/Input'
import UserForm from '../common/UserForm'

function Login({ userInput, setUsername, setPassword }) {
    const [loginError, setLogginError] = useState('')

    const handleOnSubmit = async () => {
        const areInputsValid = Object.values({
            username: userInput.username,
            password: userInput.password
        })
            .every(input => input.isValid)

        if (areInputsValid) {
            const responseFromBE = await apiService.req('POST', '/login',
                {
                    username: userInput.username.value,
                    password: userInput.password.value,
                },
                false
            )
            if (responseFromBE.status === 'error') {
                setLogginError('incorrect username or password')
            }
            else {
                localStorage.setItem('token', responseFromBE.token)
                window.location.href = '/todos/allTodos'
            }
        }
        else {
            setLogginError('all fields required')
        }
    }

    return (
            <UserForm
                name={'SIGN IN'}
                userInput={userInput}
                error={loginError}
                handleOnSubmit={handleOnSubmit}
            >
                <Input
                    minLength={1}
                    type={'text'}
                    name={'username'}
                    method={setUsername}
                />
                <Input
                    minLength={1}
                    type={'password'}
                    name={'password'}
                    method={setPassword}
                />
            </UserForm>
    )
}

const mapStateToProps = (store) => {
    console.log(store.userValues)
    return {
        userInput: store.userValues
    }
}
export default connect(mapStateToProps, { setUsername, setPassword })(Login)
