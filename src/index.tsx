import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TypingGame } from './pages/TypingGame';
import { List } from './pages/List';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/navbar';
import { IncreasingButton } from './pages/IncreasingButton';
import { Redirect } from './pages/Rediretor';
import { URLRedirector } from './pages/UrlRedirector';

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
          <Route path="/redirector" element={<URLRedirector />}>
            <Route path=":id" element={<Redirect />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
