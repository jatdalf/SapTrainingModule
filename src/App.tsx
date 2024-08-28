import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Views/Home/Home';

import logo from './logo.svg';
import './App.css';

function App() {
  return (  <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="*" element={<div>404 Not Found</div>}></Route>        
      </Routes>
    </Router>
  );
}

export default App;
