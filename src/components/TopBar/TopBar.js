import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from '../../images/logo.png';
import CartButton from '../CartButton/CartButton';
import { actionCreators } from '../../redux/sagas/cartSaga/cartSagaSaga';

import TopBarStyles from './TopBar.module.scss';

const TopBar = ({ toggleCart }) => {
    return (
        <div className={TopBarStyles.container}>
            <img
                src={logo}
                alt="Marvel comics" 
                className={TopBarStyles.logo}
                id="logo" />
            <CartButton handleClick={toggleCart}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleCart: actionCreators.toggleCart,
}, dispatch);


export default connect(
    null,
    mapDispatchToProps
)(TopBar);