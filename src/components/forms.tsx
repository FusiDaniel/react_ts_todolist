import React from 'react';

import { FiPlusCircle } from 'react-icons/fi';

interface Props {
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  newTask: string;
  classPath?: string;
}

export function Forms(props: Props): JSX.Element {
  return (
    <form
      action="#"
      className={`taskForm ${props.classPath}`}
      onSubmit={(e) => props.handleSubmit(e)}
    >
      <input
        type="text"
        className="taskInput"
        onChange={(e) => props.handleChange(e)}
        value={props.newTask}
      />
      <button type="submit">
        <FiPlusCircle />
      </button>
    </form>
  );
}
