import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../redux/sagas/cartSaga/cartSagaSaga';

import cartIcon from '../../images/cart.png';
import CartButtonStyles from './CartButton.module.scss'

const CartButton = ({ total, handleClick, cartIsActive }) => {
    return (
        <button onClick={handleClick} className={CartButtonStyles.container}>
            <div className={CartButtonStyles.openButton}>
                <img
                    src={cartIcon}
                    alt="View Cart" 
                    className={CartButtonStyles.icon} />
                <span>${total}</span>
            </div>
            {cartIsActive && <div className={CartButtonStyles.closeButton}>X</div>}
        </button>
    )
}

const mapStateToProps = ({ cartReducer }) => ({
    total: cartReducer.total,
    cartIsActive: cartReducer.cartIsActive,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setWindowWidth: actionCreators.setWindowWidth
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartButton);