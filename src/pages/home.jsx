import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col gap-5">
			<h1 className="text-4xl font-barlow font-bold">
				Client Side Routing
			</h1>

			{/* programmatic navigation */}
			<button
				className="text-xs bg-red-500 p-5 w-fit rounded-md text-white font-medium border border-gray-200 font-sans cursor-pointer"
				onClick={() => navigate('/products/15')}
			>
				Go to Product 15
			</button>
		</div>
	);
}
