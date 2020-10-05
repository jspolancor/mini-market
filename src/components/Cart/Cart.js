import React from 'react';
import { connect } from 'react-redux';

import CartStyles from './Cart.module.scss'
import CartItem from '../CartItem/CartItem';

const Cart = ({ total, productsInCart }) => {
    return (
        <div className={CartStyles.container}>
            <div className={CartStyles.products}>
                {productsInCart.map(product => 
                    <CartItem
                        image={product.image}
                        amount={product.amount}
                        key={product.id} />
                )}
            </div>
            <div className={CartStyles.total}>
                <p>Total: <strong>${total}</strong></p>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cartReducer }) => ({
    total: cartReducer.total,
    productsInCart: cartReducer.productsInCart,
});

export default connect(
    mapStateToProps
)(Cart);