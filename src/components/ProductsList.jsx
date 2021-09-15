import React from 'react'
import ProductCard from './ProductCard'
export default function ProductsList({ products, setChosenCard, handleDeleteProduct }) {

    return (
        <div className="cards-list">
            {products.map((product) => {
                return (
                    <ProductCard
                        key={product.id}
                        productId={product.id}
                        productPhoto={product.photo}
                        productName={product.name}
                        productSize={product.size}
                        productWeight={product.weight}
                        productDescription={product.description}
                        productAmount={product.amount}
                        productComments={product.comments}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                )
            })}
        </div>
    )
}
