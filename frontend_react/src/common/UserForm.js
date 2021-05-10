import React from 'react'
import './userForm.scss'

function UserForm({
    name,
    children,
    handleOnSubmit,
    error
}) {

    return (
        <div className="userFormBox">
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
                </form>
            </div>
        </div>
    )
}

export default UserForm
