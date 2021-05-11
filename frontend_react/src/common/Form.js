import React from 'react'
import PopMessage from '../popMessage/PopMessage'
import './form.scss'

function Form({
    name,
    children,
    handleOnSubmit,
    error,
    cancelButtonName,
    cancelAction
}) {

    return (
        <div className="formBox">
            <PopMessage />
            <div className="form">
                <div className="leftBox">
                    <h2>{name}</h2>
                </div>
                <form>
                    <div className="inputBox">
                        {children}
                    </div>
                    <p className="errorMessage">{error}</p>
                    <button className="okButton" type="button" onClick={() => handleOnSubmit()}>{name}</button>
                    <button className="cancelButton" onClick={() => cancelAction()} >{cancelButtonName}</button>
                </form>
            </div>
        </div>
    )
}

export default Form
