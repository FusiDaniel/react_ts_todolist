import React, { useCallback, useState } from 'react';

import { Button } from '../../components/button';

export function IncreasingButton(): JSX.Element {
  const [counter, setCounter] = useState(0);

  const increaseCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter, setCounter]);

  const decreaseCounter = useCallback(() => {
    setCounter(counter - 1);
  }, [counter, setCounter]);

  return (
    <>
      <h1 className="title">IncreasingButton</h1>
      <div className="button-row">
        <Button
          text="-1"
          onClick={() => decreaseCounter()}
          className="decrease"
        />
        <h1>{counter}</h1>
        <Button
          text="+1"
          onClick={() => increaseCounter()}
          className="increase"
        />
      </div>
    </>
  );
}
