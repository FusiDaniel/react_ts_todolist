import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import { Forms } from '../../components/forms';
import { useInterval } from '../../hooks/user-interval';

export function TypingGame(): JSX.Element {
  const [input, setInput] = useState('');
  const [word, setword] = useState('');
  const [wins, setWins] = useState(Array<string>);
  const [delay, setDelay] = useState(500);

  const changeWord = async () => {
    axios.get('https://random-word-api.herokuapp.com/word').then((res) => {
      setword(res.data[0]);
      console.log(res.data[0]);
    });
  };

  useEffect(() => {
    changeWord();
  }, []);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      setInput(e.currentTarget.value);
    },
    [input, setInput],
  );

  useInterval(() => {
    if (input != '') {
      const newInput = input.substring(0, input.length - 1);
      setInput(newInput);
    }
  }, delay);

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (input != word) return;
      setWins([...wins, input]);
      setInput('');
      changeWord();
    },
    [wins, setWins, input, setInput],
  );

  return (
    <>
      <h1 className="title">Tente digitar: {word}</h1>
      <p>Delay: {delay}ms</p>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={150}
        max={750}
        defaultValue={500}
        onChange={(e) => setDelay(e)}
      />
      <Forms
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        newTask={input}
      />
      <ul>
        {wins.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}
