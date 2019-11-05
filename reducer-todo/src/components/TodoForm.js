import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

const TodoForm = () => {
	const [todo, setTodo] = useState("");

	const [state, dispatch] = useReducer(reducer, initialState);
	console.log("console.log output: TodoForm -> state", state);

	const handleChanges = e => {
		setTodo(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: "ADD_TODO", payload: todo });
	};
	return (
		<div className="form-contain">
			<form>
				<input
					onChange={handleChanges}
					type="text"
					name="todo"
					placeholder="Add todo :D"
					value={todo}
				/>
				<button className="submit-btn" onClick={handleSubmit}>
					Submit
				</button>
				<button className="clear-btn" /*onClick={props.clearComplete}*/>
					Clear completed items
				</button>
			</form>
		</div>
	);
};

export default TodoForm;
