import { useEffect, useState } from 'react';

export default function Effects() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setCount(count + 1); // count is 0
		}, 1000);
		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		const id = setInterval(() => {
			setCount2((prevCount) => prevCount + 1);
		}, 1000);
		return () => clearInterval(id);
	}, []);

	return (
		<div>
			Count {count}
			<div>Count2 {count2}</div>
		</div>
	);
}
