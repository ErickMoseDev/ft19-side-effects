import { Star } from 'lucide-react';

export default function ProductCard({
	title,
	price,
	image,
	description,
	category,
	rating,
}) {
	return (
		<div className="rounded-xl border border-gray-300 overflow-hidden flex flex-col justify-between">
			<img
				src={image}
				alt={title}
				className="w-full h-75 object-contain "
			/>

			<div className="flex flex-col gap-3 p-5">
				<h2 className="font-barlow font-bold text-2xl">{title}</h2>
				<div className="text-red-500 font-bold font-sans bg-red-200 w-fit px-2 py-1 rounded-md">
					{category}
				</div>

				<p className="line-clamp-4 text-gray-500">{description}</p>
			</div>

			<div className="flex items-center justify-between p-5">
				<h3 className="font-barlow font-bold text-3xl">$ {price}</h3>
				<div className="flex items-center gap-1">
					<Star className="text-orange-500" size={16} />
					<p
						className={
							rating.rate < 2.0
								? 'text-red-500 text-lg font-bold font-sans'
								: rating.rate < 4.0
									? 'text-amber-500 text-lg font-bold font-sans'
									: 'text-green-500 text-lg font-bold font-sans'
						}
					>
						{rating.rate}
					</p>
				</div>
			</div>
		</div>
	);
}
