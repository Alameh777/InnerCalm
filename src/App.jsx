import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" render={() => <Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App
