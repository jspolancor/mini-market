import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import { actionCreators } from '../../redux/sagas/storeSaga/storeSagaSaga';

import ProductsContainerStyles from './ProductsContainer.module.scss'

import ProductCard from '../ProductCard/ProductCard';
import { comics } from '../../constants/comics';

const ProductsContainer = ({ setSelectedProductId, productsInCart, cartIsActive }) => {
    const [extendedProducts, setExtendedProducts] = useState([]);
    const containerClasses = classNames({ 
        [ProductsContainerStyles.productsContainer]: true,
        [ProductsContainerStyles.blurred]: cartIsActive
    });

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
        <section className={ProductsContainerStyles.container}>
            <h2>Store</h2>
            <div className={containerClasses}>
                {extendedProducts.map(product => 
                    <ProductCard 
                        key={product.id}
                        product={product} 
                        handleClick={() => setSelectedProductId(product.id)} 
                    />
                )}
            </div>
        </section>
    )
}

const mapStateToProps = ({ cartReducer }) => ({
    productsInCart: cartReducer.productsInCart,
    cartIsActive: cartReducer.cartIsActive,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setSelectedProductId: actionCreators.setSelectedProductId
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);