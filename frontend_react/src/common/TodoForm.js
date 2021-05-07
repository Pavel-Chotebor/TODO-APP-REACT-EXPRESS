import React, { useState } from 'react'
import { connect } from 'react-redux'
import './todoForm.scss'

function TodoForm({ requestToBE, initialValues, cancelAction, todoId }) {
    const [titleError, setTitleError] = useState('')
    const [dueDateError, setDueDateError] = useState('')

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
        if (values.title.length < 1) {
            setTitleError('TITLE IS MISSNG')
        }
        if (values.dueDate.length < 1) {
            setDueDateError('DUE-DATE IS MISSING')
        }
        else {
            requestToBE(
                {
                    id: todoId,
                    title: values.title,
                    description: values.description,
                    dueDate: values.dueDate,
                })
        }
    }

    return (
        <div className={"editTodoForm "}>
            <form method="post">
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
                <button className="cancelButton" onClick={() => cancelAction()} >CANCEL</button>
            </form>
        </div>
    )
}

export default connect(null, null)(TodoForm)

/*

   import React, { useState } from 'react';
import { editTodo, addTodo, addTodoReq } from '../actions/todoActions'
import { connect } from 'react-redux'
import './todoForm.scss'

function TodoForm({ addTodoReq }) {
    const [titleError, setTitleError] = useState('')
    const [dueDateError, setDueDateError] = useState('')
    const initialValues = {
        title: '',
        description: '',
        dueDate: '',
    };

    const [values, setValues] = useState(initialValues);
    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const sendReqToBackendToEditTodo = () => {
        if (values.title.length < 1) {
            setTitleError('TITLE IS MISSNG')

        }
        if (values.dueDate.length < 1) {
            setDueDateError('DUE-DATE IS MISSING')
        }
        else {
            addTodoReq(
                {
                    title: values.title,
                    description: values.description,
                    dueDate: values.dueDate,
                })
            //window.location.href = '/todos/allTodos'
        }
    }

    return (
        <div className={"editTodoForm "}>

            <form method="post">
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
                <button type="button" onClick={() => sendReqToBackendToEditTodo()}>SAVE CHANGES</button>
                <button onClick={() => ''} >CANCEL</button>
            </form>
        </div>
    )
}

export default connect(null, { addTodo, addTodoReq })(TodoForm)

    */