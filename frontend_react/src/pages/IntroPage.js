import React from 'react';
import WelcomePage from './WelcomePage';
import './introPage.scss'

function IntroPage({ children }) {
    return (
        <div className="introPage">
            <WelcomePage></WelcomePage>
            {children}
        </div>
    );
}

export default IntroPage;