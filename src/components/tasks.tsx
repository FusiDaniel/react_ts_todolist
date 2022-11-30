import React from 'react';
import { FiEdit, FiMinusCircle } from 'react-icons/fi';

interface Props {
  tasks: Array<string>;
}

export function TasksList(props: Props): JSX.Element {
  return (
    <ul>
      {props.tasks.map((task, index) => (
        <li key={task}>
          {task} {index}
          <span>
            <FiEdit /> <FiMinusCircle />
          </span>
        </li>
      ))}
    </ul>
  );
}
