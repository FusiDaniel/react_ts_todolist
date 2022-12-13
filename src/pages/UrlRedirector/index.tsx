import React from 'react';
import { Outlet } from 'react-router-dom';
export function URLRedirector(): JSX.Element {
  return (
    <>
      <h1 className="title">URL Shortener</h1>
      <Outlet />
    </>
  );
}
