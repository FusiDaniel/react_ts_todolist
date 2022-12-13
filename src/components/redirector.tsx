import React, { useEffect } from 'react';

interface Props {
  url: string;
}

export function Redirect(props: Props): JSX.Element {
  const url = props.url;
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <h1>Redirecting...</h1>;
}
