import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Conteiner from "./components/Conteiner";
import Modal from "./components/Modal"

function App() {
  return (
    <div style={{background: "rgb(245, 245, 245)"}}>
      <NavBar/>
      <Conteiner/>
      <Modal/> 
    </div>
  );
}

export default App;
