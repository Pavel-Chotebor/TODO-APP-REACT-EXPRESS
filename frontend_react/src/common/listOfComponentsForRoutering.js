import AddTodo from '../addTodo/AddTodo';
import TodoPage from '../todo/TodoPage'
import Registration from '../registration/Registration'
import Login from '../login/Login'
import { getToday } from '../services/dateService'

export const collectionForIntroPage = [
    {
        component: <Registration />,
        path: '/register'
    },
    {
        component: <Login />,
        path: '/login'
    }
]

export const collectionForMainPage = [
    {
        component:
            <TodoPage
                titleOfPage="TODAY"
                todoFilter={todo => todo.dueDate === getToday() && !todo.isDone} />,
        path: '/todos/today'
    },
    {
        component:
            <TodoPage
                titleOfPage="ALL TASKS"
                todoFilter={todo => !todo.isDone} />,
        path: '/todos/allTodos'
    },
    {
        component:
            <TodoPage
                titleOfPage="DONE TASKS"
                todoFilter={todo => todo.isDone} />,
        path: '/todos/done'
    },
    {
        component:
            < AddTodo />,
        path: '/todos/add'
    }
]