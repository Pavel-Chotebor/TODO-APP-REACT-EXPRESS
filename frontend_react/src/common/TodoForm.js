import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    useHistory,
} from "react-router-dom";
import './todoForm.scss'

function TodoForm({
    requestToBE,
    initialValues,
    cancelAction,
    cancelButtonName,
    redirectingPath,
    todoId
}) {

    const [titleError, setTitleError] = useState('')
    const [dueDateError, setDueDateError] = useState('')
    const [values, setValues] = useState(initialValues)
    let history = useHistory()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleOnClick = () => {
        if (values.dueDate.length < 1) {
            setDueDateError('DUE-DATE IS MISSING')
        }
        if (values.title.length < 1) {
            setTitleError('TITLE IS MISSING')
        }
        else {
            requestToBE(
                {
                    id: todoId,
                    title: values.title,
                    description: values.description,
                    dueDate: values.dueDate,
                })
            if (redirectingPath) {
                history.push(redirectingPath)
            }
        }
    }

    return (
        <div className={"editTodoForm "}>
            <form>
                <label>
                    <input
                        type="text"
                        maxLength="20"
                        placeholder={"TITLE (MAX 20 CHARACTERS)"}
                        onChange={handleInputChange}
                        value={values.title}
                        name="title"
                    />
                    <p className="errorMessage">{titleError}</p>
                </label>
                <label>
                    <input
                        type="text"
                        maxLength="70"
                        placeholder={"DESCRIPTION  (MAX 70 CHARACTERS)"}
                        onChange={handleInputChange}
                        value={values.description}
                        name="description"
                    />
                </label>
                <label>
                    <input
                        placeholder={"DUE-DATE"}
                        type="date"
                        onChange={handleInputChange}
                        value={values.dueDate}
                        name="dueDate"
                    />
                    <p className="errorMessage">{dueDateError}</p>
                </label>
                <button className="okButton" type="button" onClick={() => handleOnClick()}>SAVE CHANGES</button>
                <button className="cancelButton" onClick={() => cancelAction()} >{cancelButtonName}</button>
            </form>
        </div>
    )
}

export default connect(null, null)(TodoForm)
