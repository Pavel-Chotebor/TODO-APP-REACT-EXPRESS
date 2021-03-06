import React from 'react';
import './todoButton.scss'

function TodoButton({ buttonName, buttonAction, img }) {
    return (
        <div className="buttonBox">
            <div className={buttonName}>
                <button
                    onClick={() => buttonAction()}>
                    <img src={img}
                    />
                </button>
            </div>
        </div>
    )
}

export default TodoButton;
