import apiService from "../services/apiService";
import { setMessage } from './popUpMessageActions'

export const todoActions = {
    FETCH_TODOS: "FETCH_TODOS",
    UPDATE_TODOS: "UPDATE_TODOS",
    UPDATE_TODO: "UPDATE_TODO",
    SET_TODO_DONE: "SET_TODO_DONE",
    ADD_TODO: "ADD_TODO",
    EDIT_TODO: "EDIT_TODO",
    DELETE_TODO: "DELETE_TODO",
    SET_ALARM: "SET_ALARM",
    SHARE_TODO: "SHARE_TODO",
    CHECK_TODO: "CHECK_TODO",
    SET_TODO_EDITED: "SET_TODO_EDITED",
    SET_TODO_NOT_EDITED: "SET_TODO_NOT_EDITED",
}

const updateTodos = (todos) => ({
    type: todoActions.UPDATE_TODOS,
    payload: todos,
});

const checkTodo = (todoId) => ({
    type: todoActions.CHECK_TODO,
    payload: todoId,
});

const updateTodo = (todoId) => ({
    type: todoActions.UPDATE_TODO,
    payload: todoId,
})

export const setTodoAsEdited = (todoId) => ({
    type: todoActions.SET_TODO_EDITED,
    payload: todoId,
});

export const setTodoNotEdited = (todoId) => ({
    type: todoActions.SET_TODO_NOT_EDITED,
    payload: todoId,
});


const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
export const addTodo = (todo) => dispatch => (
    dispatch({
        type: todoActions.ADD_TODO,
        payload: {
            ...todo,
            isDone: 0,
            createdDate: date,
        } ,
    }),
    dispatch(setMessage('NEW TASK: ' + todo.title + ' ADDED.'))
)

export const fetchTodos = () => dispatch => {           // check path
    console.log('REQ_GET_')
    apiService.get('/todos/getAll').then(
        response => dispatch(updateTodos(response)),
        error => console.error(error))
}

export const setTodoDone = (todo) => dispatch => {
    console.log('REQ_PUT')
    apiService.req('put', '/todos/setTodoDone', { id: todo.id }).then(
        dispatch(checkTodo(todo.id)),
        dispatch(setMessage(todo.title + " DONE.")))
}

export const deleteTodoReq = (todo) => dispatch => {
    apiService.req('delete', '/todos/delete', { id: todo.id }).then(
        dispatch(checkTodo(todo.id)),
        dispatch(setMessage(todo.title + ' DELETED.'))
    )
}

export const editTodo = (todo) => dispatch => {
    console.log('ACTION IS RUNNING ')
    apiService.req('put', '/todos/edit', todo).then(
        dispatch(updateTodo(todo)),
        dispatch(setMessage(todo.title + ' EDITED.'))
    )
}

export const addTodoReq = (todo) => dispatch => {
    console.log('ADDING IS RUNNING ')
    apiService.req('post', '/todos/add', todo).then(
        dispatch(addTodo(todo)),
        dispatch(setMessage('NEW TASK: ' + todo.title + ' ADDED.'))
    )
}
