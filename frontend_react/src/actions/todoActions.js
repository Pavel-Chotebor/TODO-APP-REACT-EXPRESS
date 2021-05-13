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
}

const updateTodos = (todos) => ({
    type: todoActions.UPDATE_TODOS,
    payload: todos,
});

const deleteTodo = (todoId) => ({
    type: todoActions.DELETE_TODO,
    payload: todoId,
});

const updateTodo = (todo) => ({
    type: todoActions.UPDATE_TODO,
    payload: todo,
})

export const setTodoAsEdited = (todo) => dispatch => (
    dispatch(updateTodo({
        ...todo,
        isEdited: true,
    }))
)

export const setTodoNotEdited = (todo) => dispatch => (
    dispatch(updateTodo({
        ...todo,
        isEdited: false,
    }))
)

export const fetchTodos = () => dispatch => {
    apiService.get('/todos/getAll').then(
        response => dispatch(updateTodos(response)),
        error => console.error(error))
}

export const setTodoDone = (todo) => dispatch => {
    apiService.req('put', '/todos/setTodoDone', { id: todo.id }).then(
        dispatch(updateTodo({
            ...todo,
            isDone: true
        })),
        dispatch(setMessage(todo.title + " DONE.")))
}

export const deleteTodoReq = (todo) => dispatch => {
    apiService.req('delete', '/todos/delete', { id: todo.id }).then(
        dispatch(deleteTodo(todo.id)),
        dispatch(setMessage(todo.title + ' DELETED.'))
    )
}

export const editTodo = (todo) => dispatch => {
    apiService.req('put', '/todos/edit', todo).then(
        dispatch(updateTodo(todo)),
        dispatch(setMessage(todo.title + ' EDITED.')),
    )
}

export const addTodoReq = (todo) => dispatch => {
    apiService.req('post', '/todos/add', todo).then(
        response =>
            dispatch({
                type: todoActions.ADD_TODO,
                payload: response,
            }),
        dispatch(setMessage('NEW TASK: ' + todo.title + ' ADDED.'))
    )
}
