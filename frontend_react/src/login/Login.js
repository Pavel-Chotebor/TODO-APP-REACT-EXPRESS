import React, { useState } from 'react'
import { connect } from 'react-redux'
import apiService from '../services/apiService'
import { setUsername, setPassword } from '../actions/userActions'
import Input from '../common/Input'
import PopMessage from '../popMessage/PopMessage'
import Form from '../common/Form'
import './login.scss'

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
        <Form className="loginForm"
            name={'SIGN IN'}
            error={loginError}
            handleOnSubmit={handleOnSubmit}
        >
            <PopMessage message={'created'}></PopMessage>
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
        </Form>
    )
}

const mapStateToProps = (store) => {
    return {
        userInput: store.userValues
    }
}
export default connect(mapStateToProps, { setUsername, setPassword })(Login)
