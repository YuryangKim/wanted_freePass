import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import First from './pages/First/First';
import Second from './pages/Second/Second';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/1" element={<First />} />
        <Route path="/2" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
