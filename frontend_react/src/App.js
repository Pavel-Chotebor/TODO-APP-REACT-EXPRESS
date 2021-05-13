import './App.css';
import MainPage from './pages/MainPage'
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import { connect } from 'react-redux'
import AddTodo from './addTodo/AddTodo';
import TodoPage from './todo/TodoPage'
import Registration from './registration/Registration'
import IntroPage from './pages/IntroPage'
import Login from './login/Login'
import { getToday } from './services/dateService'

function App({ }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/register">
          <IntroPage>
            <Registration></Registration>
          </IntroPage>
        </Route>
        <Route path="/login">
          <IntroPage>
            <Login></Login>
          </IntroPage>
        </Route>
        <Route path="/welcome">
          <IntroPage />
        </Route>
        <Route path="/todos/today">
          <MainPage>
            <TodoPage
              titleOfPage="TODAY"
              todoFilter={todo => todo.dueDate === getToday() && !todo.isDone}
            >
            </TodoPage>
          </MainPage>
        </Route>
        <Route path="/todos/allTodos">
          <MainPage>
            <TodoPage
              titleOfPage="ALL TASKS"
              todoFilter={todo => !todo.isDone}
            >
            </TodoPage>
          </MainPage>
        </Route>
        <Route path="/todos/done">
          <MainPage>
            <TodoPage
              titleOfPage="DONE TASKS"
              todoFilter={todo => todo.isDone}
            >
            </TodoPage>
          </MainPage>
        </Route>
        <Route path="/todos/add">
          <MainPage>
            <AddTodo></AddTodo>
          </MainPage>
        </Route>
      </Switch >
    </Router >
  )
}

export default connect(null, null)(App)
