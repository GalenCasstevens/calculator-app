import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [result, setResult] = useState('');

	const handleClick = (e) => {
		setResult(result.concat(e.target.name));
	};

	return (
		<>
			<div className="container">
				<form>
					<input type="text" value={result} />
				</form>

				<div className="keypad">
					<button className="red-btn" onClick={handleClick}>
						C
					</button>
					<button className="red-btn" onClick={handleClick}>
						+/-
					</button>
					<button className="red-btn" onClick={handleClick}>
						%
					</button>
					<button className="yellow-btn" name="/" onClick={handleClick}>
						&divide;
					</button>
					<button className="blue-btn" name="7" onClick={handleClick}>
						7
					</button>
					<button className="blue-btn" name="8" onClick={handleClick}>
						8
					</button>
					<button className="blue-btn" name="9" onClick={handleClick}>
						9
					</button>
					<button className="yellow-btn" name="*" onClick={handleClick}>
						&times;
					</button>
					<button className="blue-btn" name="4" onClick={handleClick}>
						4
					</button>
					<button className="blue-btn" name="5" onClick={handleClick}>
						5
					</button>
					<button className="blue-btn" name="6" onClick={handleClick}>
						6
					</button>
					<button className="yellow-btn" name="-" onClick={handleClick}>
						&ndash;
					</button>
					<button className="blue-btn" name="1" onClick={handleClick}>
						1
					</button>
					<button className="blue-btn" name="2" onClick={handleClick}>
						2
					</button>
					<button className="blue-btn" name="3" onClick={handleClick}>
						3
					</button>
					<button className="yellow-btn" name="+" onClick={handleClick}>
						+
					</button>
					<button
						className="grid-span-2 blue-btn"
						name="0"
						onClick={handleClick}
					>
						0
					</button>
					<button className="blue-btn" name="." onClick={handleClick}>
						.
					</button>
					<button className="yellow-btn" name="=" onClick={handleClick}>
						=
					</button>
				</div>
			</div>
		</>
	);
};

export default App;
