import React from 'react';
import LeftMenuItem from '../leftMenu/components/LeftMenuItem'
import './welcomePage.scss'

const items = [
    {
        link: '/login',
        title: 'SIGN IN'
    },
    {
        link: '/register',
        title: 'SIGN UP'
    },

    {
        link: '/aboutProject',
        title: 'ABOUT PROJECT'
    }
]


function WelcomePage({ }) {
    return (
        <div className="welcomePageBox">
            <h1>TASK planner </h1>
            <div className="navigation">
                {items.map(item =>
                    <LeftMenuItem
                        title={item.title}
                        link={item.link}
                    />
                )}
            </div>
        </div>
    )
}

export default WelcomePage;

{/* <ul>
                    <li> LOG IN</li>
                    <li> SIGN IN</li>
                    <li> ABOUT PROJECT</li>
                </ul> */}