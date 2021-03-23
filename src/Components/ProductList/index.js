import React from 'react';
import ProductItem from '../ProductItem';
import { ProductListItems } from './list';
import './style.css'

const ProductList = () => {
    return(
        <div className="product-list-container">
            <div className="list-header">Grid System</div>
            <div className="products-wrapper">
                {ProductListItems.map((item, index) => {
                    return(
                        <ProductItem key={index} details={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList