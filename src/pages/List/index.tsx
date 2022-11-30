import React, { useCallback, useEffect, useState } from 'react';
import { Forms } from '../../components/forms';
import { TasksList } from '../../components/tasks';
import { api } from '../../services/api';

import './style.scss';

interface responseTasks {
  list: Array<string>;
}

export function List(): JSX.Element {
  const [newTask, setNewtask] = useState('');
  const [tasks, setTasks] = useState(Array<string>);

  useEffect(() => {
    api.get('/todo_list').then((response) => {
      const tasks: responseTasks = response.data;
      setTasks(tasks.list);
    });
  }, []);

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

      if (tasks.indexOf(newTaskToAdd) !== -1) {
        window.alert(`${newTaskToAdd} already exists`);
        return;
      }
      if (newTaskToAdd === '') return;

      const newTasks = [...tasks, newTaskToAdd];
      setTasks(newTasks);

      api.post('/todo_list', {
        list: newTasks,
      });
    },
    [newTask, setNewtask, tasks, setTasks],
  );

  const handleDelete = useCallback(
    (e: React.MouseEvent<SVGElement, MouseEvent>, index: number) => {
      const newTasks = [...tasks];
      const oldTask = newTasks[index];
      newTasks.splice(index, 1);
      setTasks([...newTasks]);

      api.delete('/todo_list/' + oldTask);
    },
    [tasks, setTasks],
  );

  const handleEdit = useCallback(
    (
      e: React.SyntheticEvent<HTMLFormElement>,
      index: number,
      newTaskToAdd: string,
    ): void => {
      e.preventDefault();

      if (tasks.indexOf(newTaskToAdd) !== -1) {
        window.alert(`${newTaskToAdd} already exists`);
        return;
      }
      if (newTaskToAdd === '') {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks([...newTasks]);
      } else {
        const newTasks = [...tasks];
        newTasks[index] = newTaskToAdd;
        setTasks([...newTasks]);
      }
    },
    [tasks, setTasks],
  );

  return (
    <>
      <h1 className="title">List</h1>
      <TasksList
        tasks={tasks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Forms
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        newTask={newTask}
      />
    </>
  );
}
