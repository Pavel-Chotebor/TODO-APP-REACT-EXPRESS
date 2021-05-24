import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './leftMenu.scss'
import LeftMenuItem from '../components/LeftMenuItem'

const items = [
    {
        link: '/todos/add',
        title: 'ADD NEW TASK +'
    },
    {
        link: '/todos/today',
        title: 'TODAY'
    },
    {
        link: '/todos/allTodos',
        title: 'ACTIVE TASKS'
    },
    {
        link: '/todos/done',
        title: 'DONE'
    }
]


function LeftMenu({ }) {
    return (
        <div className="leftMenu">
            <div className="dateCategory">
                {items.map(item => (
                    <LeftMenuItem
                        title={item.title}
                        link={item.link}
                    >
                    </LeftMenuItem>
                ))}
            </div>
        </div>
    );
}

export default LeftMenu;
