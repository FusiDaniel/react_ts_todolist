import React, { useCallback, useEffect, useState } from 'react';
import { Forms } from '../../components/forms';
import { useInterval } from '../../hooks/user-interval';

const palavra = 'batata';

export function About(): JSX.Element {
  const [input, setInput] = useState('');
  const [conseguiu, setConseguiu] = useState(false);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      setInput(e.currentTarget.value);
    },
    [input, setInput],
  );

  useInterval(() => {
    if (input != '' && !conseguiu) {
      const newInput = input.substring(0, input.length - 1);
      setInput(newInput);
    }
  }, 500);

  useEffect(() => {
    if (input === palavra) setConseguiu(true);
    else setConseguiu(false);
  }, [input, setInput, conseguiu, setConseguiu]);

  return (
    <>
      <h1 className="title">Tente digitar: {palavra}</h1>
      <Forms
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => console.log(input)}
        newTask={input}
      />
    </>
  );
}
