import React, { useState } from 'react'
import { nanoid } from 'nanoid';


export default function AddProduct({ products, setProducts, addTrigger, setAddTrigger }) {
    const [product, setProduct] = useState({
        id: nanoid(),
        name: '',
        photo: '',
        height: '',
        width: '',
        description: '',
        amount: '',
        comments: {}
    });

    const updateField = (e) => {
			setProduct({
				...product,
				[e.target.name]: e.target.value,
			});
    };
    
    const addProduct = (product) => {
        const newProduct = {
            id: nanoid(),
            name: product.name,
            photo: product.photo,
            size: {
                height: product.height,
                width: product.width,
            },
            weight: product.weight,
            description: product.description,
            amount: product.amount,
        };
        setProducts([...products, newProduct]);
    };

    return addTrigger ? (
        <div className='add-product'>
            <p className="value">Name</p>
				<input
					type="text"
					name="name"
					onChange={updateField}
            />
            <p className="value">Photo URL</p>
				<input
					type="text"
					name="photo"
					onChange={updateField}
            />
            <p className="value">Heigth</p>
				<input
					type="text"
					name="height"
					onChange={updateField}
            />
            <p className="value">Width</p>
				<input
					type="text"
					name="width"
					onChange={updateField}
            />
            <p className="value">Weigth</p>
				<input
					type="text"
					name="weight"
					onChange={updateField}
            />
            <p className="value">Description</p>
				<input
					type="text"
					name="description"
					onChange={updateField}
            />
            <p className="value">Amount</p>
				<input
					type="text"
					name="amount"
					onChange={updateField}
				/>
            <button onClick={() => {
                addProduct(product);
                setAddTrigger(false);
            }}>Add</button>
            <button onClick={() => { setAddTrigger(false) }}>Close</button>
			</div>
		) : (
			""
		);
}
