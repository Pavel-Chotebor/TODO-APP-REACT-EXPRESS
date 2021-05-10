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
