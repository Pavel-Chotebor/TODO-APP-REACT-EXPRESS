import React, { useEffect } from 'react';
import Todo from './Todo'
import PopMessage from '../popMessage/PopMessage'
import { fetchTodos } from '../actions/todoActions'
import { connect } from 'react-redux'
import './todoPage.scss'

function TodoPage({ titleOfPage, todos, fetchTodos, todoFilterCondition }) {

    useEffect(() => {
        fetchTodos()
    }, [fetchTodos])

    return (
        <div className="todoPage">
            <PopMessage />
            <h1 className="title">{titleOfPage}</h1>
            <div className="innerBox">
                <div className="todoList">
                    {todos.map(todo =>
                        <Todo todo={todo}
                            key={todo.id}
                        >
                        </Todo>
                    )}
                </div>
            </div>
        </div>
    )
}

export default connect(null, { fetchTodos })(TodoPage)
