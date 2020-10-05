import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as cartActionCreators } from '../../redux/sagas/cartSaga/cartSagaSaga';
import { actionCreators as storeActionCreators } from '../../redux/sagas/storeSaga/storeSagaSaga';

import Modal from '../Modal/Modal';
import ActiveProduct from '../ActiveProduct/ActiveProduct';
import Cart from '../Cart/Cart';

const Modals = ({ setSelectedProductId, productModalOpen, toggleCart, cartModalOpen}) => {
    
    return (
        <>
            <Modal
                onClose={() => setSelectedProductId(false)}
                open={productModalOpen}
                title="Product detail">
                <ActiveProduct />
            </Modal>
            <Modal
                onClose={toggleCart}
                open={cartModalOpen}
                title="Shopping cart">
                <Cart />
            </Modal>
        </>
    )
}

const mapStateToProps = ({ cartReducer, storeReducer }) => ({
    cartModalOpen: cartReducer.cartModalOpen,
    productModalOpen: storeReducer.productModalOpen
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setSelectedProductId: storeActionCreators.setSelectedProductId,
    toggleCart: cartActionCreators.toggleCart,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modals);