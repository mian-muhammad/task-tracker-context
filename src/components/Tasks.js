import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Task from './Task';

const Tasks = () => {
  const { tasks } = useContext(GlobalContext);

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
