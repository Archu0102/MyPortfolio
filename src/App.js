import React from 'react';
import './index.css';
import Homepage from './routes/Home';
import Aboutpage from './routes/About';
import Mycontact from './routes/Contact';
import Myproject from './routes/Project';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
       <Routes>
         <Route path='/' element={<Homepage/>}/>
         <Route path='/project' element={<Myproject/>}/>
         <Route path='/about' element={<Aboutpage/>}/>
         <Route path='/contact' element={<Mycontact/>}/>
       </Routes>
    </>
  );
}

export default App;
