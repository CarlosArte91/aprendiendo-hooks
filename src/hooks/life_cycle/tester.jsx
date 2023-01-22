import { useState } from "react";
import WillUnmount from "./will_unmount";

function Tester() {
	const [show, setShow] = useState(true);

	const handleShow = () => {
		setShow(!show);
	};

	return (
		<div>
			<h2>Probador de componentes</h2>
			<button onClick={handleShow}>{show ? 'Ocultar' : 'Mostrar'}</button>
			<hr />
			{show ? <WillUnmount /> : <div> </div> }
		</div>
	);
}

export default Tester;
