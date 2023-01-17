import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Calc from './pages/Calc';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/quote" element={<Quote />} />
      </Route>
    </Routes>
  </div>
);
export default App;
