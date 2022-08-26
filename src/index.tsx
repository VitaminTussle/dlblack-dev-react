import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home/Home';
import reportWebVitals from './reportWebVitals';
import Code from './Code/Code';
import Music from './Music/Music';
import Writing from './Writing/Writing';
import Pockets from './Pockets/Pockets';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/code' element={<Code />} />
      <Route path='/music' element={<Music />} />
      <Route path='/writing' element={<Writing />} />
      <Route path='/pockets' element={<Pockets />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
