import React from 'react';
import { Link } from 'react-router-dom';

function LeftMenuItem({ link, title }) {
    return (
        <div>
            <Link to={link}>
                <div className="menuLink" >
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    )
}

export default LeftMenuItem;
