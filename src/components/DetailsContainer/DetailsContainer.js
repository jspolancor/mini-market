import React from 'react';
import { connect } from 'react-redux';

import DetailsContainerStyles from './DetailsContainer.module.scss';
import ActiveProduct from '../ActiveProduct/ActiveProduct';
import Cart from '../Cart/Cart';

const DetailsContainer = ({ 
    cartIsActive,
    selectedProductId,
}) => {
    const showInfo = !cartIsActive && !selectedProductId;
    const showProduct = selectedProductId && !cartIsActive;
    const showCart = cartIsActive;

    return (
        <aside className={DetailsContainerStyles.container}>
            <h2 className={DetailsContainerStyles.title}>
                {showInfo && 'Info'}
                {showProduct && 'Product'}
                {showCart && 'Shopping cart'}
            </h2>
            <div className={DetailsContainerStyles.content}>
                {showInfo && 
                    <p className="info">
                        Please choose a product on the left
                    </p>
                }
                {showProduct && <ActiveProduct />}
                {showCart && <Cart />}
            </div>
        </aside>
    )
}

const mapStateToProps = ({ cartReducer, storeReducer }) => ({
    cartIsActive: cartReducer.cartIsActive,
    selectedProductId: storeReducer.selectedProductId
});

export default connect(
    mapStateToProps
)(DetailsContainer);