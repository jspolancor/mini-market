import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActiveProductStyles from './ActiveProduct.module.scss';
import { actionCreators } from '../../redux/reducers/cartReducer/cartReducerReducer';
import ProductCard from '../ProductCard/ProductCard';
import { comics } from '../../constants';

const ActiveProduct = ({ 
    productsInCart,
    selectedProductId,
    addProductToCart,
    removeProductFromCart
}) => {
    const [selectedProduct, setSelectedProduct] = useState({});
    
    useEffect(() => {
        const productInCart = productsInCart.find(product => product.id === selectedProductId);

        setSelectedProduct({
            ...comics.find(product => product.id === selectedProductId),
            amount: productInCart ? productInCart.amount : 0
        })
    }, [selectedProductId, productsInCart])

    return (
        <div className={ActiveProductStyles.container}>
            <div className={ActiveProductStyles.product}>
                <ProductCard handleClick={() => false} product={selectedProduct}/>
            </div>
            <div className={ActiveProductStyles.actions}>
                <div className={ActiveProductStyles.actionsButtons}>
                    <span>{selectedProduct.name}</span>
                    <strong>${selectedProduct.price}</strong>
                </div>
                <div className={ActiveProductStyles.actionsButtons}>
                    <button className="remove" onClick={() => removeProductFromCart(selectedProduct.id)}>-</button>
                    <button className="add" onClick={() => addProductToCart(selectedProduct)}>+</button>
                </div>
            </div>
            <div className={ActiveProductStyles.description}>
                <p>{selectedProduct.description}</p>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cartReducer, storeReducer }) => ({
    productsInCart: cartReducer.productsInCart,
    selectedProductId: storeReducer.selectedProductId
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addProductToCart: actionCreators.addProductToCart,
    removeProductFromCart: actionCreators.removeProductFromCart,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveProduct);