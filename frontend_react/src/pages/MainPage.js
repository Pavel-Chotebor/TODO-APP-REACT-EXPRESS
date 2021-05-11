import React from 'react';
import Header from '../header/Header'
import LeftMenu from '../leftMenu/pages/LeftMenu'
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
    )
}

export default connect(null, { fetchTodos })(MainPage)
