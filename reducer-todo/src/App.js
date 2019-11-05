import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
	return (
		<div className="main-contain">
			<TodoList />
			<TodoForm />
		</div>
	);
}

export default App;
