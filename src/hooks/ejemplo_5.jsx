import { useEffect, useState } from "react";

function Ejemplo5() {
	const [user, setUser] = useState({
		name: 'Carlos',
		lastname: 'Cruz',
	});

	const handleChange = () => {
		setUser({
			...user,
			lastname: 'Gutierrez'
		})
	};

	useEffect(() => {
		console.log('ya me ejecuté');
	}, [user]);

	return (
		<div>
			<h2>Name: {user.name}</h2>
			<h2>Lastname: {user.lastname}</h2>
			<button onClick={handleChange} >Update lastname</button>
		</div>
	);
}

export default Ejemplo5;
