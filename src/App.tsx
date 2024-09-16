import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Views/Home/Home';
import Transacciones from './Views/Transacciones/Transacciones';
import Procesos from './Views/Procesos/Procesos';
import NotFound from './Component/NotFound/NotFound';

import Me51n from './Component/me51n/Me51n';
import Lt12 from './Component/Lt12/Lt12';
import Yupdcontimas from './Component/Yupdcontimas/Yupdcontimas';
import Va01 from './Component/Va01/Va01';
import Migo from './Component/Migo/Migo';
import Me21n from './Component/Me21n/Me21n';

import ProcesoMe51n from './Component/ProcesoMe51n/ProcesoMe51n';
import ProcesoMe51nRH from './Component/ProcesoMe51nRH/ProcesoMe51nRH';

function App() {
  return (  <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>    

        {/* Sección de transacciones */}
        <Route path="/Transacciones" element={<Transacciones/>}></Route>        
        <Route path="/Transacciones/Lt12" element={<Lt12 />}></Route>  
        <Route path="/Transacciones/Yupdcontimas" element={<Yupdcontimas />}></Route>   
        <Route path="/Transacciones/Me51n" element={<Me51n />}></Route>
        <Route path="/Transacciones/Va01" element={<Va01 />}></Route>
        <Route path="/Transacciones/Migo" element={<Migo />}></Route>
        <Route path="/Transacciones/Me21n" element={<Me21n />}></Route>

        {/* Sección de Procesos */}
        <Route path="/Procesos" element={<Procesos/>}></Route>        
        <Route path="/Procesos/ProcesoMe51n" element={<ProcesoMe51n/>}></Route>        
        <Route path="/Procesos/ProcesoMe51nRH" element={<ProcesoMe51nRH/>}></Route>        

      </Routes>
    </Router>
  );
}

export default App;
