import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ProductsList from "./components/ProductsList";
import AddProduct from './components/AddProduct';

import './App.css';


function App() {
	const [addTrigger, setAddTrigger] = useState(false)
	const [products, setProducts] = useState([
		{
			id: nanoid(),
			name: "T-shirt",
			photo: "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
			description: "Hight quality t-shirt",
			amount: 2,
			size: {
				width: '200',
				height: '200'
			},
			weight: '200g',
			comments: [
				{
				commentId: 1,
				user: 'Ivan',
				text: 'Nice'
				}
			]
		},
	]);
	console.log(products)
	const deleteProduct = (id) => {
		const newProducts = products.filter((el) => el.id !== id);
		setProducts(newProducts);
	}

	useEffect(() => {
	  localStorage.setItem("react-products-data", JSON.stringify(products));
	}, [products]);
	
  	useEffect(() => {
    	const savedProducts = JSON.parse(localStorage.getItem("react-products-data"));
    	if (savedProducts) {
      		setProducts(savedProducts);
    	}
	},[]);

	return (
		<div className="shop">
			<header className="shop-header">
				<div className="header-logo">Shop</div>
				<button onClick={() => setAddTrigger(true) }>Add Product</button>
			</header>
			<ProductsList products={products} setChosenCard handleDeleteProduct={ deleteProduct }/>
			<AddProduct
				products={ products }
				setProducts={setProducts}
				addTrigger={addTrigger}
				setAddTrigger={setAddTrigger}
			/>
		</div>
	);
}

export default App;
