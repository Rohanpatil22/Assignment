import React from "react";
import Login from "./login.js";
import Dashboard from "./dashBoard.js";
import Navbar from "./Navbar.js";
import {Routes,Route} from 'react-router-dom';
import Register from "./Register.js";

function App() {
 
  return (
   <>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/register" element={<Register />}/>
   </Routes>
   </>
  );
}

export default App;
