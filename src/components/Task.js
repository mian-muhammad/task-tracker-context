import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalState';

const Task = ({ task }) => {
  const { deleteTask, toggleReminder } = useContext(GlobalContext);

  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
