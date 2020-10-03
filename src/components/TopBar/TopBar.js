import React from 'react';

import logo from '../../images/logo.png';

import TopBarStyles from './TopBar.module.scss'

const TopBar = () => {
    return (
        <div className={TopBarStyles.container}>
            <img
                src={logo}
                alt="Marvel comics" 
                className={TopBarStyles.logo} />
        </div>
    )
}

export default TopBar;