import React from "react";

const Todo = props => {
	const toggleComplete = () => {
		props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.id });
	};
	const handleClearComplete = e => {
		e.preventDefault();
		props.dispatch({ type: "CLEAR_COMPLETED", payload: props.id });
	};
	return (
		<div
			style={
				props.todo.completed ? { textDecoration: "line-through" } : null
			}
			onClick={toggleComplete}
		>
			{props.todo.item}
			{props.todo.completed ? (
				<button onClick={handleClearComplete}>X</button>
			) : null}
		</div>
	);
};

export default Todo;
