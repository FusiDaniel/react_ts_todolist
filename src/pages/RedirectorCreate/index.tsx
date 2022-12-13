import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import { Forms } from '../../components/forms';
import { useInterval } from '../../hooks/user-interval';

export function RedirectorCreate(): JSX.Element {
  const [inputFrom, setInputFrom] = useState('');
  const [inputTo, setInputTo] = useState('');

  // const changeWord = async () => {
  //   axios.put('https://random-word-api.herokuapp.com/word').then((res) => {
  //     setPalavra(res.data[0]);
  //     console.log(res.data[0]);
  //   });
  // };

  // const handleChange = useCallback(
  //   (e: React.FormEvent<HTMLInputElement>): void => {
  //     setInput(e.currentTarget.value);
  //   },
  //   [inputFrom, setInputFrom],
  // );

  // const handleSubmit = useCallback(
  //   (e: React.SyntheticEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     if (input != palavra) return;
  //     setConseguidos([...conseguidos, input]);
  //     setInput('');
  //     changeWord();
  //   },
  //   [conseguidos, setConseguidos, input, setInput],
  // );

  return (
    <>
      <h1 className="title">Create URL Shortener</h1>
      {/* <Forms
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        newTask={input}
      /> */}
    </>
  );
}
