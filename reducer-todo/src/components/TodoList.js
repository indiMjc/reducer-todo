import React from "react";
import Todo from "./Todo";

const TodoList = props => {
	return (
		<>
			{props.state.map(todo => (
				<Todo
					key={todo.id}
					todo={todo}
					id={todo.id}
					dispatch={props.dispatch}
				/>
			))}
		</>
	);
};

export default TodoList;
