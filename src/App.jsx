import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignUp from './signup';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App