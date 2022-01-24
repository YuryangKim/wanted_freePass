import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import First from './pages/First/First';
import Second from './pages/Second/Second';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={<First />} />
        <Route path="/2" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
