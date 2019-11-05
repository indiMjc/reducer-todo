import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

const TodoForm = () => {
	const [todo, setTodo] = useState("");

	const handleChanges = e => {
		setTodo(e.target.value);
	};
	return (
		<div className="form-contain">
			<form>
				<input
					onChange={handleChanges}
					type="text"
					name="todo"
					// value={props.value}
					placeholder="Enter todo item"
				/>
				<button className="submit-btn" /*onClick={props.addTodo}*/>
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
