import React, { useState } from "react";
import Todo from "./Todo";
import { initialState } from "../reducers/reducer";

const TodoList = () => {
	const [list] = useState(initialState);
	return (
		<>
			{list.map(todo => (
				<Todo key={todo.id} todo={todo} />
			))}
		</>
	);
};

export default TodoList;
