import React from 'react';
import { editTodo, setTodoNotEdited } from '../../actions/todoActions'
import { connect } from 'react-redux'
import TodoForm from '../../common/TodoForm'
import './editTodoForm.scss'


function EditTodoFrom({ todo, setTodoNotEdited, editTodo }) {
    return (
        <div className="editTodoForm">
            <p>EDITING: {todo.title}</p>
            <TodoForm
                className="addTodoForm"
                requestToBE={editTodo}
                todoId={todo.id}
                cancelAction={() => setTodoNotEdited(todo.id)}
                initialValues={
                    {
                        title: todo.title,
                        description: todo.description,
                        dueDate: todo.dueDate,
                    }
                }
            />
        </div>
    )
}

export default connect(null, { editTodo, setTodoNotEdited })(EditTodoFrom)

/*

import React, { useState } from 'react';
import { editTodo, setTodoNotEdited } from '../../actions/todoActions'
import { connect } from 'react-redux'
import './editTodoForm.scss'

function EditTodoFrom({ todo, setTodoNotEdited, editTodo }) {
    const initialValues = {
        title: todo.title,
        description: todo.title,
        dueDate: todo.dueDate,
    };

    const [values, setValues] = useState(initialValues);
    const handleInputChange = (e) => {
        //const name = e.target.name
        //const value = e.target.value
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const sendReqToBackendToEditTodo = () => {
        editTodo(
            {
                id: todo.id,
                title: values.title,
                description: values.description,
                dueDate: values.dueDate,
            })
    }

    return (
        <div className={"editTodoForm "}>
            <p>{"EDIT  " + todo.title}</p>
            <form>
                <label>
                    TITLE (MAX 20 CHARACTERS)
                <input
                        type="text"
                        maxLength="20"
                        placeholder={todo.title}
                        onChange={handleInputChange}
                        value={values.title}
                        name="title"
                    />
                </label>
                <label>
                    DESCRIPTION  (MAX 70 CHARACTERS)
                    <input
                        type="text"
                        maxLength="70"
                        placeholder={todo.description}
                        onChange={handleInputChange}
                        value={values.description}
                        name="description"
                    />
                </label>
                <label>
                    DUE
                    <input
                        placeholder={todo.dueDate}
                        type="date"
                        onChange={handleInputChange}
                        value={values.dueDate}
                        name="dueDate"
                    />
                </label>
                <button className="okButton" onClick={() => sendReqToBackendToEditTodo()}>SAVE CHANGES</button>
                <button className="cancelButton" onClick={() => setTodoNotEdited(todo.id)} >CANCEL</button>
            </form>
        </div>
    )
}

export default connect(null, { editTodo, setTodoNotEdited })(EditTodoFrom)

*/