import React, { useCallback, useState } from 'react';
import { Forms } from '../../components/forms';
import { TasksList } from '../../components/tasks';

import './style.scss';

export function List(): JSX.Element {
  const [newTask, setNewtask] = useState('');
  const [tasks, setTasks] = useState(Array<string>);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      setNewtask(e.currentTarget.value);
    },
    [newTask, setNewtask],
  );

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent<HTMLFormElement>): void => {
      e.preventDefault();
      let newTaskToAdd = newTask;
      newTaskToAdd = newTaskToAdd.trim();
      setNewtask('');

      if (tasks.indexOf(newTaskToAdd) !== -1) return;
      setTasks([...tasks, newTaskToAdd]);
    },
    [newTask, setNewtask, tasks, setTasks],
  );

  return (
    <>
      <h1 className="title">List</h1>
      <TasksList tasks={tasks} />
      <Forms
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        newTask={newTask}
      />
    </>
  );
}
