export const initialState = [
	{
		item: "Learn about reducers",
		completed: false,
		id: 3892987589
	}
];

export const reducer = (state, action) => {
	console.log('REDUCER', state);
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
			//console.log(state);
			const newState = state.map(todo => {
				console.log(action.payload, todo.id)
				if (action.payload === todo.id) {
					console.log(todo)
					console.log("CHANGE", { ...todo, completed: !todo.completed });
					return { ...todo, completed: !todo.completed };
				}
				// console.log("todo", todo);
				return todo;
			});
			return newState;
		default:
			return state;
	}
};
