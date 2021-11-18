import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// * Initial state
const initialState = {
  tasks: [
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 7th at 2:30pm',
      reminder: false
    }
  ]
};

// * Create context
export const GlobalContext = createContext(initialState);

// * Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // * Actions
  function deleteTask(id) {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    });
  }

  function toggleReminder(id) {
    dispatch({
      type: 'TOGGLE_REMINDER',
      payload: id
    });
  }

  function addTask(task) {
    console.log(task);
    dispatch({
      type: 'ADD_TASK',
      payload: task
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        deleteTask,
        toggleReminder,
        addTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
