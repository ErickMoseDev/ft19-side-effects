import { useEffect, useState } from 'react';
import { Shuffle } from 'lucide-react';
import ProductCard from './product-card';


const BASE_URL = 'https://fakestoreapi.com';

export default function RandomProduct() {
	// fetch products depending on the product id https://fakestoreapi.com/products/${productId}
	
	const [productId, setProductId] = useState(1);
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	// Fetch a product whenever productId changes
	
	useEffect(() => {
		async function fetchProduct() {
			setLoading(true);
			setError('');

			try {
				const response = await fetch(
					`${BASE_URL}/products/${productId}`
				);

				if (!response.ok) {
					throw new Error('Failed to fetch product');
				}

				const data = await response.json();
				setProduct(data);
			
			}  catch (err) {
				 setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		fetchProduct();
	}, [productId]);
	
		
	// implement a randomize function that returns a random integer from 1 to 20 and updates the productId state variable
	function randomize() {
		const randomId = Math.floor(Math.random() * 20) + 1;
		setProductId(randomId);
	}

	return (
		<div className="min-h-screen p-5">
			<div className="max-w-md mx-auto mb-8 text-center">
				<h1 className="text-3xl font-bold mb-3">
					Random Product Generator

				</h1>

				<p className="text-gray-500 mb-5">
					Discover a random product from our store.
				</p>

				<button 
				     onClick={randomize}
				     className="flex items-center gap-2 mx-auto bg-blue-500 hover:bg-amber-300 text-white font-bold px-6 py-3 rounded-lg transition-colors">

					<Shuffle size={20} />
					 Randomize Product

				</button>

				<p className="text-sm text-gray-500 mt-3">
					Product ID: {productId} / 20
				</p>	
								
			</div> 

			{loading && (
				<p className="text-center text-blue-600">
					Loading product...
				</p>
			)}

			{error && (
				<p className="text-center text-red-500">
					{error}
				</p>
			)}

			{!loading && !error && product && (
				<div className="max-w-md mx-auto">
					<ProductCard {...product} />

				</div>
			)}
			
		</div>
	);
}
