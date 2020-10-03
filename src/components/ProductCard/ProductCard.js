import React from 'react';

import ProductCardStyles from './ProductCard.module.scss'

const ProductCard = ({ product, handleClick }) => {
    return (
        <div className={ProductCardStyles.container} onClick={handleClick}>
            {true && 
                <small className={ProductCardStyles.amount}>
                    {product.amount}
                </small>
            }
            <img
                className={ProductCardStyles.image}
                alt={product.name}
                src={product.image} />
        </div>
    )
}

export default ProductCard;