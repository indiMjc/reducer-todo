export const initialState = [
	{
		item: "Learn about reducers",
		completed: false,
		id: 3892987589
	}
];

export const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const newTodo = {
				item: action.payload,
				completed: false,
				id: Date.now()
			};
			return [newTodo, ...state];
		case "TOGGLE_COMPLETED":
			const newState = state.map(todo => {
				if (action.payload === todo.id) {
					todo.completed = !todo.completed;
					return todo;
				}
				return todo;
			});
			console.log(newState);
			return newState;
		default:
			return state;
	}
};
