import React, { useState } from 'react'
import { connect } from 'react-redux'
import './input.scss'

function Input({ type, name, maxLength, minLength, method, initialValue , isValid}) {
    const [value, setValue] = useState(initialValue);
    const [errorMessage, setErrorMessage] = useState('')

    // method(isValid, value)

    const handleInputChange = (e) => {
        const tempValue = e.target.value
        setValue(tempValue)
        if (minLength) {
            if (tempValue.length < minLength) {
                setErrorMessage(minLength === 1 ? 'field cannot be empty' : 'minimal length is ' + minLength)
                method(false, tempValue)
            }
            else {
                setErrorMessage('')
                method(true, tempValue)
            }
        } else {
            method(tempValue)
        }
    }

    return (
        <div className="input">
            <input
                maxLength={maxLength}
                type={type}
                name={name}
                placeholder={name}
                value={value}
                onChange={handleInputChange}
            />
            <div className="errorMessage">
                <p>{errorMessage}</p>
            </div>
        </div>
    )
}

export default connect(null, {})(Input)
