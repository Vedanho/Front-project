import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
	const [count, setCounter] = useState(0);

	const handleIncrement = () => {
		setCounter((prev) => prev + 1);
	};

	const handleDecrement = () => {
		setCounter((prev) => prev - 1);
	};

	return (
		<div className={classes.btn}>
			<h1>{count}</h1>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
		</div>
	);
};
