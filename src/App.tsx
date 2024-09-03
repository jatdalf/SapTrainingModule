import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Views/Home/Home';
import Transacciones from './Views/Transacciones/Transacciones';
import Me51n from './Component/me51n/Me51n';
import Lt12 from './Component/Lt12/Lt12';

function App() {
  return (  <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="*" element={<div>404 Not Found</div>}></Route>        
        <Route path="/Transacciones" element={<Transacciones/>}></Route>
        <Route path="/Transacciones/Lt12" element={<Lt12 />}></Route>     
        <Route path="/Transacciones/Me51n" element={<Me51n />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
