import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [result, setResult] = useState('');
	const [operator, setOperator] = useState('');
	const [lastExpression, setLastExpression] = useState('');

	const clearResult = () => {
		setOperator('');
		setLastExpression('');
		setResult('');
	};

	const buildExpression = (e) => {
		// only one decimal per expression
		if (lastExpression.includes('.') && e.target.name === '.') return;

		setLastExpression(lastExpression.concat(e.target.name));
		setResult(result.concat(e.target.name));
	};

	const changeSign = (e) => {
		if (lastExpression.length === 0) return;

		let expression = '';

		if (lastExpression.charAt(0) === '-') expression = lastExpression.slice(1);
		else expression = '-' + lastExpression;

		const ind = result.lastIndexOf(lastExpression);
		setResult(result.substring(0, ind) + expression);
		setLastExpression(expression);
	};

	const makeExpressionPercent = (e) => {
		if (result === lastExpression) {
			setResult('');
			setLastExpression('');
			return;
		}

		const expression = eval(lastExpression + '*.01').toString();
		const ind = result.lastIndexOf(lastExpression);

		setResult(result.substring(0, ind) + expression);
		setLastExpression(expression);
	};

	const changeOperator = (e) => {
		// does not make sense to have operand as first input
		if (result.length === 0) return;

		const newOperator = e.target.name;
		setLastExpression('');

		if (isNewOperand()) {
			updateOperator(newOperator);
			setOperator(newOperator);
		} else {
			setOperator(newOperator);
			setResult(result.concat(newOperator));
		}
	};

	const updateOperator = (newOperator) => {
		const ind = result.lastIndexOf(operator);
		setResult(result.substring(0, ind) + newOperator);
	};

	const calcResult = (e) => {
		if (isNewOperand()) {
			setResult(eval(result.substring(0, result.length - 1)).toString());
			setOperator('');
		} else setResult(eval(result).toString());
		setLastExpression(eval(result).toString());
	};

	const isNewOperand = () => {
		const lastChar = result.slice(-1);

		if (
			lastChar === '/' ||
			lastChar === '*' ||
			lastChar === '+' ||
			lastChar === '-'
		)
			return true;

		return false;
	};

	return (
		<>
			<div className="container">
				<form>
					<input type="text" value={result} readOnly />
				</form>

				<div className="keypad">
					<button className="red-btn" onClick={clearResult}>
						C
					</button>
					<button className="red-btn" onClick={changeSign}>
						+/-
					</button>
					<button className="red-btn" onClick={makeExpressionPercent}>
						%
					</button>
					<button className="yellow-btn" name="/" onClick={changeOperator}>
						&divide;
					</button>
					<button className="blue-btn" name="7" onClick={buildExpression}>
						7
					</button>
					<button className="blue-btn" name="8" onClick={buildExpression}>
						8
					</button>
					<button className="blue-btn" name="9" onClick={buildExpression}>
						9
					</button>
					<button className="yellow-btn" name="*" onClick={changeOperator}>
						&times;
					</button>
					<button className="blue-btn" name="4" onClick={buildExpression}>
						4
					</button>
					<button className="blue-btn" name="5" onClick={buildExpression}>
						5
					</button>
					<button className="blue-btn" name="6" onClick={buildExpression}>
						6
					</button>
					<button className="yellow-btn" name="+" onClick={changeOperator}>
						+
					</button>
					<button className="blue-btn" name="1" onClick={buildExpression}>
						1
					</button>
					<button className="blue-btn" name="2" onClick={buildExpression}>
						2
					</button>
					<button className="blue-btn" name="3" onClick={buildExpression}>
						3
					</button>
					<button className="yellow-btn" name="-" onClick={changeOperator}>
						&ndash;
					</button>
					<button
						className="grid-span-2 blue-btn"
						name="0"
						onClick={buildExpression}
					>
						0
					</button>
					<button className="blue-btn" name="." onClick={buildExpression}>
						.
					</button>
					<button className="yellow-btn" name="=" onClick={calcResult}>
						=
					</button>
				</div>
			</div>
		</>
	);
};

export default App;
