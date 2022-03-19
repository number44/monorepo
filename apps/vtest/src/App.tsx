import { useState } from 'react';
import { Button } from 'ui';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Button text="xx" />
		</div>
	);
}

export default App;
