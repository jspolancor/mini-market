import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../redux/sagas/storeSaga/storeSagaSaga';

import ProductsContainerStyles from './ProductsContainer.module.scss'

import ProductCard from '../ProductCard/ProductCard';
import { comics } from '../../constants';

const ProductsContainer = ({ setSelectedProductId, productsInCart }) => {
    const [extendedProducts, setExtendedProducts] = useState([]);

    useEffect(() => {
        setExtendedProducts(comics.map(product => {
            const productInsideCart = productsInCart.find(productInCart => productInCart.id === product.id);

            return {
                ...product,
                amount: productInsideCart ? productInsideCart.amount : 0
            }

        }));
    }, [productsInCart]);

    return (
        <div className={ProductsContainerStyles.container}>
            <h2>Store</h2>
            <hr />
            <div className={ProductsContainerStyles.productsContainer}>
                {extendedProducts.map(product => 
                    <ProductCard 
                        key={product.id}
                        product={product} 
                        handleClick={() => setSelectedProductId(product.id)} 
                    />
                )}
            </div>
        </div>
    )
}

const mapStateToProps = ({ cartReducer }) => ({
    productsInCart: cartReducer.productsInCart
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setSelectedProductId: actionCreators.setSelectedProductId
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);