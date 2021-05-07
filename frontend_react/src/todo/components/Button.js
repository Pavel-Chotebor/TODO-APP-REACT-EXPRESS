import React, { useEffect } from 'react';
import Todo from './Todo'
import './todoPage.scss'
import { fetchTodos } from '../actions/todoActions'
import { connect } from 'react-redux'


function Button({ }) {
    return (
        <div className="">

        </div>
    );
}

// const mapStateToProps = (store) => {
//     console.log(store.todos)
//     return {
//         todos: store.todos
//     }
// }

export default (Button)