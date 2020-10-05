import React from 'react';
import { connect } from 'react-redux';

import DetailsContainerStyles from './DetailsContainer.module.scss';
import ActiveProduct from '../ActiveProduct/ActiveProduct';

const DetailsContainer = ({ 
    cartIsActive,
    selectedProductId,
}) => {
    return (
        <div className={DetailsContainerStyles.container}>
            {(!cartIsActive && !selectedProductId) && 
                <p className="info">Please choose a product on the left</p>
            }
            {(selectedProductId && !cartIsActive) && <ActiveProduct />}
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