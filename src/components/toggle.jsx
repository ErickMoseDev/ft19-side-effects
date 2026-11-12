import { PanelLeftClose, PanelRightClose, Target } from 'lucide-react';
import { useState } from 'react';

const navlinks = [
	{
		id: 1,
		title: 'Home',
		path: '/',
	},
	{
		id: 2,
		title: 'Products',
		path: '/',
	},
	{
		id: 3,
		title: 'About',
		path: '/',
	},
	{
		id: 4,
		title: 'Contact Us',
		path: '/',
	},
	{
		id: 5,
		title: 'Privacy',
		path: '/',
	},
];

export default function Toggle() {
	const [open, setOpen] = useState(true);

	function handleToggle() {
		setOpen(!open);
	}

	// useEffect(() => {
	// 	console.log('This will be called everytime the app re-renders');
	// });

	return (
		<div className="flex gap-5 flex-1">
			{open && (
				<aside className="fixed top-0 left-0 w-60 border-r bg-gray-800 border-gray-400 border-dashed h-screen ">
					<div className="border-b border-dashed border-gray-400 flex gap-3 items-center px-5">
						<Target size={30} className="text-green-500" />
						<h1 className="py-5 font-barlow font-bold text-green-500 text-2xl">
							Target
						</h1>
					</div>
					<ul className="flex flex-col gap-3 p-5">
						{navlinks.map((nav) => (
							<li key={nav.id} className="text-white">
								{nav.title}
							</li>
						))}
					</ul>
				</aside>
			)}

			<section className="ml-60 p-5">
				<button
					className="bg-green-500 p-3 text-green-950"
					onClick={handleToggle}
				>
					{open ? <PanelLeftClose /> : <PanelRightClose />}
				</button>
			</section>
		</div>
	);
}
