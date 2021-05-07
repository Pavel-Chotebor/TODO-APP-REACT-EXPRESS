import React from 'react';
import Header from '../header/Header'
import LeftMenu from '../leftMenu/pages/LeftMenu'
import PopMessage from '../popMessage/PopMessage'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions/todoActions'
import './mainPage.scss'

function MainPage({ children }) {

    return (
        <div className="mainPage">
            <Header name="TASK planner"></Header>
            <div className="leftMenuWithTodoBox">
                <LeftMenu />
                {children}
            </div>
        </div>
    );
}

const mapStateToProps = (store) => {
    console.log(store)
    return {
    }
}

export default connect(mapStateToProps, { fetchTodos })(MainPage)


/*

function MainPage({ message}) {
    return (

        <div className="mainPage">
            <Header name="TASK planner"></Header>
            <div className="leftMenuWithTodoBox">
                <LeftMenu></LeftMenu>
                <TodoPage list={todos}>
                <AddTodo></AddTodo>
                <PopMessage ></PopMessage>
                </TodoPage>

            </div>
        </div>

    );
}
*/

/*

       <Router history={history}>
            <Switch>
                <div className="mainPage">
                    <Header name="TASK planner"></Header>
                    <div className="leftMenuWithTodoBox">
                        <LeftMenu></LeftMenu>
                        <TodoPage>
                            <Route path="/todos/add">
                                <AddTodo></AddTodo>
                            </Route>
                            <PopMessage ></PopMessage>
                        </TodoPage>
                    </div>
                </div>
            </Switch>
        </Router>

        */