import React, { useCallback, useState } from 'react';
import { FiEdit, FiMinusCircle } from 'react-icons/fi';
import { list_item } from '../services/api';
import { Forms } from './forms';

interface Props {
  tasks: Array<list_item>;
  handleDelete(
    e: React.MouseEvent<SVGElement, MouseEvent>,
    index: number,
  ): void;
  handleEdit(
    e: React.SyntheticEvent<HTMLFormElement>,
    index: number,
    newTask: string,
  ): void;
}

export function TasksList(props: Props): JSX.Element {
  const [newTask, setNewtask] = useState('');
  const [hiddenIndex, setHiddenIndex] = useState(-1);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      setNewtask(e.currentTarget.value);
    },
    [newTask, setNewtask],
  );

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent<HTMLFormElement>): void => {
      e.preventDefault();
      props.handleEdit(e, hiddenIndex, newTask);
      setHiddenIndex(-1);
    },
    [newTask, setNewtask, hiddenIndex],
  );

  return (
    <ul className="taskList">
      {props.tasks.map((task, index) => (
        <li key={task.id}>
          <span className="taskContent">
            <Forms
              newTask={index === hiddenIndex ? newTask : task.message}
              handleChange={(e) => handleChange(e)}
              handleSubmit={(e) => handleSubmit(e)}
              classPath={index === hiddenIndex ? 'insideTaskForm' : 'hidden'}
            />
            {hiddenIndex === index ? null : task.message}
          </span>
          <span>
            <FiEdit
              className="editButton"
              onClick={() => {
                if (index === hiddenIndex) {
                  setNewtask('');
                  setHiddenIndex(-1);
                } else {
                  setNewtask(task.message);
                  setHiddenIndex(index);
                }
              }}
            />

            <FiMinusCircle
              className="deleteButton"
              onClick={(e) => props.handleDelete(e, index)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
