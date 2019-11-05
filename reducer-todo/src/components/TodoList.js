import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import Todo from "./Todo";

const TodoList = () => {
	return (
		<>
			<Todo />
		</>
	);
};

export default TodoList;
