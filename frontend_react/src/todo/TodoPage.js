import React, { useEffect } from 'react';
import Todo from './Todo'
import PopMessage from '../popMessage/PopMessage'
import { fetchTodos } from '../actions/todoActions'
import { connect } from 'react-redux'
import './todoPage.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoPage({ titleOfPage, todos, fetchTodos, todoFilter }) {

    useEffect(() => {
        fetchTodos()
    }, [fetchTodos])

    return (
        <div className="todoPage">
            <PopMessage />
            <h1 className="title">{titleOfPage}</h1>
            <div className="innerBox">
                <div className="todoList">
                    {todos.length < 1
                        ? <h3 className="pageInfo">no tasks</h3>
                        : todos.filter(todoFilter).map(todo =>
                            <Todo todo={todo}
                                key={todo.id + todo.title}
                            />
                        )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        todos: store.todos
    }
}

export default connect(mapStateToProps, { fetchTodos })(TodoPage)
