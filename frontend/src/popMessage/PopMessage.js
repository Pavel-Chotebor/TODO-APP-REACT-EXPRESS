import React from 'react';
import './popMessage.css';

function PopMessage({ todo }) {
    return (
        <div className='popMessage'>
          <p>{todo.name} was created</p>
        </div>
    );
}

export default PopMessage;