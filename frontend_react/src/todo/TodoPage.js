import React, { useEffect } from 'react';
import Todo from './Todo'
import PopMessage from '../popMessage/PopMessage'
import { fetchTodos } from '../actions/todoActions'
import { connect } from 'react-redux'
import './todoPage.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoPage({ titleOfPage, todos, fetchTodos }) {

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
                        : todos.map(todo =>
                            <Todo todo={todo}
                                key={todo.id}
                            />
                        )}
                </div>
            </div>
        </div>
    )
}

export default connect(null, { fetchTodos })(TodoPage)
