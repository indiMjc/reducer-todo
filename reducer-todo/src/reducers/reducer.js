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
			console.log(action.payload);
			return [
				...state,
				{
					item: action.payload,
					completed: false,
					id: Date.now()
				}
			];
		case "TOGGLE_COMPLETED":
			console.log(state);
			const newState = state.map(todo => {
				// console.log(action.payload, todo);

				if (action.payload === todo.id) {
					todo.completed = !todo.completed;
					// console.log("changed todo", todo);
					return todo;
				}
				// console.log("todo", todo);
				return todo;
			});
			return newState;
		default:
			return state;
	}
};
