import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './leftMenu.css'


function LeftMenu({  }) {
    return (
        <div className="leftMenu">
            <div className="dateCategory">
                <a href="#">TODAY</a>
                <a href="#">NEXT 7 DAYS</a>
                <a href="#">ALL</a>
            </div>
            <div className="labelCategory">
                <a href="#">LABEL1</a>
                <a href="#">LABEL2</a>
                <a href="#">LABEL3</a>
                {/* later map list, now mock data */}
            </div>
        </div>
    );
}

export default LeftMenu;