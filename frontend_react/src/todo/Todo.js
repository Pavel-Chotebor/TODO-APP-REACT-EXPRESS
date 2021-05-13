import React from 'react';
import './todo.scss'
import EditTodoForm from './components/EditTodoForm'
import { setTodoDone, editTodo, deleteTodoReq } from '../actions/todoActions'
import { connect } from 'react-redux'
import { setShow } from '../actions/hideComponentActions'
import TodoButtons from './components/TodoButtons'

function Todo({ todo }) {
    return (
        <div className="todoBox">
            <div className="todoHeader">
                <h2>{todo.title}</h2>
            </div>
            <div className="todoInner">
                <div className="titleBox">
                </div>
                <div className="description">
                    <h3>{todo.description}</h3>
                </div>
                <div className="datesBox">
                    <p>created:{(todo.createdDate)}</p>
                    <p>due: {todo.dueDate}</p>
                </div>
                <div className="datesBox">
                </div>
            </div>
            <div className="editTodoBox">
                {todo.isEdited &&
                    <EditTodoForm
                        todo={todo}
                        key={todo.id}
                    />
                }
            </div>
            {!todo.isEdited &&
                <div className="menuSection">
                    <h4>≣</h4>
                    <div className="buttonsBox">
                        <TodoButtons
                            key={todo.id}
                            todo={todo} >
                        </TodoButtons>
                    </div >
                </div>
            }
        </div >
    )
}

export default connect(
    null, {
    setTodoDone,
    deleteTodoReq,
    editTodo,
    setShow
})
    (Todo)
