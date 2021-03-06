import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActiveProductStyles from './ActiveProduct.module.scss';
import { actionCreators } from '../../redux/reducers/cartReducer/cartReducerReducer';
import ProductCard from '../ProductCard/ProductCard';
import { comics } from '../../constants/comics';

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
        <figure className={ActiveProductStyles.container}>
            <div className={ActiveProductStyles.product}>
                <ProductCard
                    handleClick={() => false}
                    product={selectedProduct} />
            </div>
            <div className={ActiveProductStyles.actions}>
                <p className={ActiveProductStyles.info}>
                    <span>{selectedProduct.name}</span>
                    <strong>${selectedProduct.price}</strong>
                </p>
                <div className={ActiveProductStyles.actionsButtons}>
                    <button
                        className={ActiveProductStyles.remove}
                        onClick={() => removeProductFromCart(selectedProduct.id)}>
                            -
                    </button>
                    <button
                        className={ActiveProductStyles.add}
                        onClick={() => addProductToCart(selectedProduct)}>
                            +
                    </button>
                </div>
            </div>
            <figcaption className={ActiveProductStyles.description}>
                <p>{selectedProduct.description}</p>
            </figcaption>
        </figure>
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