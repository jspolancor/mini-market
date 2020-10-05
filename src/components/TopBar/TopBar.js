import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from '../../images/logo.png';
import CartButton from '../CartButton/CartButton';
import { actionCreators as cartActionCreators } from '../../redux/sagas/cartSaga/cartSagaSaga';
import { actionCreators as storeActionCreators } from '../../redux/sagas/storeSaga/storeSagaSaga';

import TopBarStyles from './TopBar.module.scss';

const TopBar = ({ toggleCart, setSelectedProductId }) => {
    return (
        <header className={TopBarStyles.container}>
            <img
                src={logo}
                alt="Marvel comics" 
                className={TopBarStyles.logo}
                id="logo" />
            <CartButton handleClick={toggleCart} />
        </header>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleCart: cartActionCreators.toggleCart,
    setSelectedProductId: storeActionCreators.setSelectedProductId,
}, dispatch);


export default connect(
    null,
    mapDispatchToProps
)(TopBar);