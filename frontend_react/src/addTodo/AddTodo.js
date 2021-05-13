import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodoReq } from '../actions/todoActions'
import Input from '../common/Input'
import Form from '../common/Form'
import { setTitle, setDueDate, setDescription } from '../actions/todoFormActions'
import {
    BrowserRouter as Router,
    useHistory,
} from "react-router-dom";
import '../addTodo/addTodo.scss'

function AddTodo({ todoValues, setTitle, setDueDate, setDescription, addTodoReq }) {
    let history = useHistory();
    const [addTodoError, setAddTodoError] = useState('')

    console.log(todoValues)

    const handleOnSubmit = async () => {
        const areInputsValid = Object.values(todoValues).every(input => input.isValid)
        if (areInputsValid) {
            addTodoReq(
                {
                    title: todoValues.title.value,
                    description: todoValues.description.value,
                    dueDate: todoValues.dueDate.value,
                })
            history.push("/todos/allTodos")
        }
        else {
            setAddTodoError('Fields required')
        }
    }
    return (
        <div className="addTodoForm">
            <Form
                name={'add'}
                error={addTodoError}
                handleOnSubmit={handleOnSubmit}
            >
                <Input
                    minLength={1}
                    maxLength={25}
                    type={'text'}
                    name={'title'}
                    method={setTitle}
                />
                <Input
                    type={'text'}
                    maxLength={50}
                    name={'description'}
                    method={setDescription}
                />
                <Input
                    minLength={1}
                    type={'date'}
                    name={'dueDate'}
                    method={setDueDate}
                />
            </Form>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        todoValues: store.todoValues,
    }
}

export default connect(mapStateToProps, { setTitle, setDueDate, setDescription, addTodoReq })(AddTodo)

/*
import React from 'react'
import { connect } from 'react-redux'
import { addTodoReq } from '../actions/todoActions'
import TodoForm from '../common/TodoForm'
import '../addTodo/addTodo.scss'

function AddTodo({ addTodoReq }) {
    return (
        <div className="addTodoBox">
            <h2>ADD NEW TASK</h2>
            <TodoForm className="addTodoForm"
                className="addTodoForm"
                requestToBE={addTodoReq}
                redirectingPath="/todos/allTodos"
                initialValues={
                    {
                        title: '',
                        description: '',
                        dueDate: '',
                    }
                }
            />
        </div>
    )
}

export default connect(null, { addTodoReq })(AddTodo)


*/
