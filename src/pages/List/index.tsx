import React, { useCallback, useEffect, useState } from 'react';
import { Forms } from '../../components/forms';
import { TasksList } from '../../components/tasks';
import {
  api,
  list_item,
  deleteItem,
  addItem,
  updateItem,
} from '../../services/api';

import './style.scss';

export function List(): JSX.Element {
  const [newTask, setNewtask] = useState('');
  const [tasks, setTasks] = useState(Array<list_item>);

  function deleteTask(index: number) {
    const newTasks = [...tasks];
    const oldTask = newTasks[index];
    newTasks.splice(index, 1);

    deleteItem(oldTask.id);
    setTasks([...newTasks]);
  }

  useEffect(() => {
    api.get('/todo_list').then((response) => {
      const newTasks: Array<list_item> = response.data;
      setTasks(newTasks);
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

      if (newTaskToAdd === '') return;
      for (const task of tasks) {
        if (task.message === newTaskToAdd) {
          window.alert(`${newTaskToAdd} already exists`);
          return;
        }
      }

      const newItem: list_item = {
        id: Math.random(),
        message: newTaskToAdd,
      };

      addItem(newItem);
      const newTasks = [...tasks, newItem];
      setTasks(newTasks);
    },
    [newTask, setNewtask, tasks, setTasks],
  );

  const handleDelete = useCallback(
    (e: React.MouseEvent<SVGElement, MouseEvent>, index: number) => {
      deleteTask(index);
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

      let newTask = newTaskToAdd;
      newTask = newTask.trim();

      if (newTask === '') {
        deleteTask(index);
        return;
      }
      for (const { task, i } of tasks.map((task, i) => ({ task, i }))) {
        if (task.message === newTask && index != i) {
          window.alert(`${newTask} already exists`);
          return;
        }
      }

      const newTasks = [...tasks];

      const newItem: list_item = {
        id: newTasks[index].id,
        message: newTask,
      };

      updateItem(newItem);

      newTasks[index] = newItem;
      setTasks([...newTasks]);
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
