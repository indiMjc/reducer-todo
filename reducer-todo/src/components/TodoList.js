import React from "react";
import Todo from "./Todo";

const TodoList = props => {
	// console.log("console.log output: props", props.state);
	return (
		<>
			{props.state.map(todo => (
				<Todo key={todo.id} todo={todo} id={todo.id} />
			))}
		</>
	);
};

export default TodoList;
