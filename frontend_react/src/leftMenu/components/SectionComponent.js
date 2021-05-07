import React from 'react';
import  Todo  from '../../todo/Todo'


function SectionComponent({ list, title }) {
    return (
        <div className="dateSection">
            <div className="titleBox">
                <h1>{title}</h1>
            </div>
            <div className="todosBox">
                {list.map(todo => (
                    <Todo todo={todo}>
                    </Todo>
                ))}
            </div>
        </div>
    )
}

export default SectionComponent;