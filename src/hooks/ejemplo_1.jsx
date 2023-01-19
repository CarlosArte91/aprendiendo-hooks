import { useState } from "react";

function Ejemplo1() {
	const initialValue = 0;
	const initialUser = {
		name: '',
		email: '',
	}

	const [count, setCount] = useState(initialValue);
	const [user, setUser] = useState(initialUser);

	const handleChangeValue = () => {
		setCount(count + 1);
	}

	const handleChangeUser = () => {
		setUser({
			name: 'pepe',
			email: 'pepe@mail.com',
		})
	}

	return (
		<div>
			<h2>****** Ejemplo de useState ********</h2>
			<h3>{count}</h3>
			<button onClick={handleChangeValue} >Change value</button>
			<h3>{`Name: ${user.name} Email: ${user.email}`}</h3>
			<button onClick={handleChangeUser} >Change user</button>
		</div>
	);
}

export default Ejemplo1;
