import React from 'react';
import './style.css'

const ProductItem = (props) => {
    const { details } = props
    return (
        <div className="product-item-container col-xl col-lg col-md col-sm col">
            <div className="product-inner-container">
                <div className="image-container">
                    <img src={details.Url} className="image-fit" alt="image" />
                </div>
                <div className="content-container">
                    {details.Title}
                </div>
            </div>
        </div>
    )
}

export default ProductItem