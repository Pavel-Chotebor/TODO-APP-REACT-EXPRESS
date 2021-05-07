import './App.css';
import MainPage from './pages/MainPage'
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import { connect } from 'react-redux'
import AddTodo from './addTodo/AddTodo';
import TodoPage from './todo/TodoPage'
import WelcomePage from './pages/WelcomePage'
import Registration from './registration/Registration'
import IntroPage from './pages/IntroPage'
import Login from './login/Login'

function App({ todos }) {
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
        <Route path="/todos/allTodos">
          <MainPage>
            <TodoPage
              titleOfPage="ALL TASKS"
              todos={todos.filter(todo => !todo.isDone)}
            >
            </TodoPage>
          </MainPage>
        </Route>
        <Route path="/todos/done">
          <MainPage>
            <TodoPage
              titleOfPage="DONE TASKS"
              todos={todos.filter(todo => todo.isDone)}
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

const mapStateToProps = (store) => {
  console.log(store.todos)
  return {
    todos: store.todos
  }
}

export default connect(mapStateToProps, null)(App)
