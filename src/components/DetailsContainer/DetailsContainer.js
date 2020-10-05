import React from 'react';
import { connect } from 'react-redux';

import DetailsContainerStyles from './DetailsContainer.module.scss';
import ActiveProduct from '../ActiveProduct/ActiveProduct';
import Cart from '../Cart/Cart';

const DetailsContainer = ({ 
    cartIsActive,
    selectedProductId,
}) => {
    return (
        <div className={DetailsContainerStyles.container}>
            <h2 className={DetailsContainerStyles.title}>Title</h2>
            <div className={DetailsContainerStyles.content}>
                {(!cartIsActive && !selectedProductId) && 
                    <p className="info">Please choose a product on the left</p>
                }
                {(selectedProductId && !cartIsActive) && <ActiveProduct />}
                {cartIsActive && <Cart />}
            </div>
        </div>
    )
}

const mapStateToProps = ({ cartReducer, storeReducer }) => ({
    cartIsActive: cartReducer.cartIsActive,
    selectedProductId: storeReducer.selectedProductId
});

export default connect(
    mapStateToProps
)(DetailsContainer);