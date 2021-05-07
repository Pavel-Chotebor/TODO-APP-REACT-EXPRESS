import React from 'react';
import './todo.scss'
import EditTodo from './components/EditTodoForm'
import { setTodoDone, editTodo, deleteTodoReq } from '../actions/todoActions'
import { connect } from 'react-redux'
import { setShow } from '../actions/hideComponentActions'
import TodoButtons from './components/TodoButtons'
import Fade from 'react-reveal/Fade';

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
                    {/* <p>created:{(todo.createdDate).substring(0, 10)}</p>
                    <p>due: {todo.dueDate.substring(0, 10)}</p> */}
                </div>
                <div className="datesBox">
                </div>
            </div>
            <div className="editTodoBox">
                {todo.isEdited &&
                    <EditTodo
                        todo={todo}
                        key={todo.id}
                    />
                }
            </div>
            {!todo.isEdited &&
                <div className="menuSection">
                    <h4>≣</h4>
                    <div class="buttonsBox">
                        <TodoButtons
                            todo={todo} >
                        </TodoButtons>
                    </div >
                </div>
            }
        </div >
    )
}

const mapStateToProps = (store) => {
    console.log(store)
    return {
    }
}


export default connect(mapStateToProps, { setTodoDone, deleteTodoReq, editTodo, setShow })(Todo)


/*
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
                    <p>created:{todo.createdDate}</p>
                    <p>due: {todo.dueDate}</p>
                </div>
                <div className="datesBox">
                </div>
            </div>
            <div className="editTodoBox">
                <EditTodo
                    todo={todo}
                    visibility={hide}
                    key={todo.id}
                />
            </div>
            <h4>≣</h4>
            <div class="buttonsBox">
                <TodoButton
                    buttonName="doneButton"
                    onClick={() => setTodoDone(todo)}
                />
                <TodoButton
                    buttonName="editButton"
                    onClick={() => setHide('')}

                />
                <TodoButton
                    buttonName="deleteButton"
                    onClick={() => deleteTodoReq(todo)}
                />
                <TodoButton buttonName="shareButton" />
            </div>
        </div >
    )
}

*/