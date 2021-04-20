import React from 'react';
// import './mainPage.css';

function TodoPage({ name, todos }) {
    return (
        <div className='mainPage'>
            <div className='name'>
                {/* <h1>{name}</h1> */}
                <h1>TODAY</h1>
            </div>
            <div className="todos">
                {/* list later */}
            <h2>todo1</h2>
            <p>description of todo 1</p>
            </div>
        </div>
    );
}

export default TodoPage;