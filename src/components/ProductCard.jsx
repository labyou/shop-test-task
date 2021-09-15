import React from 'react'

export default function ProductCard({productId, productPhoto, productName, productSize, productWeight, productDescription,  productAmount, productComments, handleDeleteProduct}) {
    return (
        <div className="product" key={ productId }>
            <img width='200' height='200' src={ productPhoto } alt="" className="product-photo" />
            <div className="product-name">{productName}</div>
            <span className="product-height">{`Height: ${productSize.height}`}</span>
            <span className="product-width">{`Width: ${productSize.width}`}</span>
            <span className="product-weight">{`Weight: ${productWeight}`}</span>
            <span className="product-description">{ productDescription }</span>
            <div className="product-amount">{`Amount: ${productAmount}`}</div>
            <button className="product-delete-button" onClick={() => handleDeleteProduct(productId)}>Delete</button>
		</div>
		);
}
