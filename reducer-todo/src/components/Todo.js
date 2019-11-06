import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

const Todo = props => {
	// console.log("console.log output: props", props);
	//const [state, dispatch] = useReducer(reducer, initialState);

	const toggleComplete = () => {
		props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.id });
	};
	return (
		<div
			style={
				props.todo.completed ? { textDecoration: "line-through" } : null
			}
			onClick={toggleComplete}
		>
			{props.todo.item}
		</div>
	);
};

export default Todo;
