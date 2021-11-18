const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };

    case 'TOGGLE_REMINDER':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, reminder: !task.reminder }
            : task
        )
      };

    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    default:
      return state;
  }
};

export default AppReducer;
