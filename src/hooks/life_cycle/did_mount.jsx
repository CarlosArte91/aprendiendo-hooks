import { useEffect, useState } from 'react';
import DidUpdate from './did_update';

function DidMount() {
	const [user, setUser] = useState([]);
	const [num, setNum] = useState(0);

	const handleNum = () => {
		setNum(num + 1);
	};

	/* El useEffect con los conchetes vacios, replica el comportamiento de
		ComponentDidMount el cual es el método de componentes de clases
		que se ejecuta justo despues de que el componente sea montado.
		Este es ideal para realizar peticiones http para traer informacion de
		Apis.
	*/
	useEffect(() => {
		console.log('Ejecutando el equivalente a componentDidMount');
		fetch('https://reqres.in/api/users')
			.then((response) => response.json())
			.then((json) => setUser(json.data))
	}, []);

	return (
		<div>
			<h2>DidMount</h2>
			{user.length ? (
				<div>
					<h3>{`${user[4].first_name} ${user[4].last_name}`}</h3>
					<img style={{borderRadius: '50%'}} src={user[4].avatar} alt="profile" />
				</div>
			) : <div>Loading...</div>}
			<button onClick={handleNum}>Aumentar</button>
			<hr />
			<DidUpdate num={num} />
		</div>
	);
}

export default DidMount;
