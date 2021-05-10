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
