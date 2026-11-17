import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { STORE_BASE_URL } from '../lib/utils';
import { Star } from 'lucide-react';

export default function ProductDetails() {
	const [product, setProduct] = useState({});
	const { productId } = useParams();

	useEffect(() => {
		const controller = new AbortController();

		fetch(`${STORE_BASE_URL}/products/${productId}`, {
			signal: controller.signal,
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Fetching Failed');
				}

				return res.json();
			})
			.then((data) => setProduct(data))
			.catch((error) => console.error(error));
	}, [productId]);

	return (
		<div className="h-screen flex items-center justify-center max-w-5xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{/* product image */}

				<div className="col-span-1">
					<img
						src={product.image}
						alt={product.title}
						className="h-full w-full object-contain"
					/>
				</div>
				{/* product details */}
				<div className="flex flex-col gap-5">
					<h2 className="font-barlow font-bold text-2xl">
						{product.title}
					</h2>
					<div className="text-red-500 font-bold font-sans bg-red-200 w-fit px-2 py-1 rounded-md">
						{product.category}
					</div>

					<p className=" text-gray-500">{product.description}</p>

					<div className="flex items-center justify-between p-5">
						<h3 className="font-barlow font-bold text-3xl">
							$ {product.price}
						</h3>
						<div className="flex items-center gap-1">
							<Star className="text-orange-500" size={16} />

							{Object.keys(product).length > 0 ? (
								<p
									className={
										product.rating.rate < 2.0
											? 'text-red-500 text-lg font-bold font-sans'
											: product.rating.rate < 4.0
												? 'text-amber-500 text-lg font-bold font-sans'
												: 'text-green-500 text-lg font-bold font-sans'
									}
								>
									{product.rating.rate}
								</p>
							) : (
								<div className="">Loading...</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
