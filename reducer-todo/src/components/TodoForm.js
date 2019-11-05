import React from "react";

const TodoForm = () => {
	return (
		<div className="form-contain">
			<form>
				<input
					// onChange={props.changeTodo}
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
