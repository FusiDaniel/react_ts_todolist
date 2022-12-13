import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TypingGame } from './pages/TypingGame';
import { List } from './pages/List';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/navbar';
import { IncreasingButton } from './pages/IncreasingButton';
import { Redirect } from './components/redirector';
import { RedirectorCreate } from './pages/RedirectorCreate';
import { api, linked_page } from './services/api';

let urls: linked_page[];
urls = [{ url: '', destiny: '' }];

api
  .get('/linked_pages')
  .then((res) => {
    const newUrls: Array<linked_page> = res.data;
    urls = newUrls;
    console.log(urls);
  })
  .catch((e) => {
    // server responded with error
    if (e.res) {
      // console.log(e.res.data);
      console.log(e.res.status);
      // console.log(e.res.headers);
    }
    // server did not responded
    else if (e.request) {
      console.log(e.request);
    }
    // other errors
    else {
      console.log('Error', e.message);
    }
    console.log(e.config);
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typing_game" element={<TypingGame />} />
          <Route path="/list" element={<List />} />
          <Route path="/button" element={<IncreasingButton />} />
          <Route path="/redirector" element={<RedirectorCreate />} />
          <Route path="*" element={<NotFound />} />
          {urls.map((item, index) => (
            <Route
              key={index}
              path={item.url}
              element={<Redirect url={item.destiny} />}
            />
          ))}
          <Route
            path="/google"
            element={<Redirect url="https://google.com" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
