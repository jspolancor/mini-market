import React from 'react';

import CartItemStyles from './CartItem.module.scss'

const CartItem = ({ image, amount }) => {

    return (
        <div className={CartItemStyles.container}>
            <div className={CartItemStyles.amount}>
                {amount}
            </div>
            <img src={image} className={CartItemStyles.image} alt="preview" />
        </div>
    )
}

export default CartItem;