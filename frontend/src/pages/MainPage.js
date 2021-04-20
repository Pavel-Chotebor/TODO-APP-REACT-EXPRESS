import React from 'react';
import Header from '../header/Header'
import LeftMenu from '../leftMenu/LeftMenu'
import './mainPage.css' 


function MainPage({  }) {
    return (
        <div className='background'>
        <div className="mainPage">
        <Header></Header>
        <LeftMenu></LeftMenu>
        </div>
        </div>
    );
}

export default MainPage;