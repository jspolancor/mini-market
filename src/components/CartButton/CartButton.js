import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../redux/sagas/cartSaga/cartSagaSaga';

import cartIcon from '../../images/cart.png';
import CartButtonStyles from './CartButton.module.scss'

const CartButton = ({ total, handleClick }) => {
    return (
        <button onClick={handleClick} className={CartButtonStyles.container}>
            <img
                src={cartIcon}
                alt="View Cart" 
                className={CartButtonStyles.icon} />
            <span>${total}</span>
        </button>
    )
}

const mapStateToProps = ({ cartReducer }) => ({
    total: cartReducer.total,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setWindowWidth: actionCreators.setWindowWidth
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartButton);