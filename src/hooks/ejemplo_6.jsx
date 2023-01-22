import { useEffect, useState } from 'react';

function Ejemplo6() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		console.log('se ejecuta');
		fetch('https://reqres.in/api/users')
			.then((response) => response.json())
			.then((json) => setUsers(json.data))
	}, []);

	return (
		<div>
			<h2>Lista de usuarios</h2>
			{users.length ? (
				<ul>
					{users.map((user) => (
						<li key={user.id} >{`${user.first_name} ${user.last_name}`}</li>
					))}
				</ul>
			) : <h3>Loading...</h3>}
		</div>
	);
}

export default Ejemplo6;
