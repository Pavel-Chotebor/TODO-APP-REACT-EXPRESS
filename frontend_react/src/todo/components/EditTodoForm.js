import React, { useState } from 'react'
import { connect } from 'react-redux'
import Input from '../../common/Input'
import Form from '../../common/Form'
import { editTodo, setTodoNotEdited } from '../../actions/todoActions'
import { setTitle, setDueDate, setDescription } from '../../actions/todoFormActions'

function EditTodoForm({ todo, todoValues, setTitle, setDueDate, setDescription, setTodoNotEdited, editTodo }) {
    const [addTodoError, setAddTodoError] = useState('')
    const handleOnSubmit = async () => {
        const areInputsValid = Object.values(todoValues).every(input => input.isValid)
        console.log(todoValues)
        if (areInputsValid) {
            editTodo(
                {
                    ...todo,
                    title: todoValues.title.value,
                    description: todoValues.description.value,
                    dueDate: todoValues.dueDate.value,
                })
        }
        else {
            setAddTodoError('Fields required')
        }
    }
    return (
        <div className="addTodoForm">
            <Form
                name={'edit'}
                error={addTodoError}
                handleOnSubmit={handleOnSubmit}
                cancelAction={() => setTodoNotEdited(todo)}
                cancelButtonName={'cancel'}
            >
                <Input
                    minLength={1}
                    maxLength={25}
                    type={'text'}
                    name={'title'}
                    method={setTitle}
                    initialValue={todo.title}
                    isValid={todoValues.title.isValid}
                />
                <Input
                    type={'text'}
                    maxLength={50}
                    name={'description'}
                    method={setDescription}
                    initialValue={todo.description}
                    isValid={todoValues.description.isValid}
                />
                <Input
                    minLength={1}
                    type={'date'}
                    name={'dueDate'}
                    method={setDueDate}
                    initialValue={todo.dueDate}
                    isValid={todoValues.dueDate.isValid}
                />

            </Form>
        </div>
    )
}

const mapStateToProps = (store) => {
    console.log(store.todoValues)
    return {
        todoValues: store.todoValues,
    }
}

export default connect(mapStateToProps, { editTodo, setTodoNotEdited, setTitle, setDueDate, setDescription })(EditTodoForm)

/*

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
                cancelAction={() => setTodoNotEdited(todo)}
                cancelButtonName="CANCEL"
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


*/