import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Conteiner from "./components/Conteiner";
import Modal from "./components/Modal";

function App() {
  return (
    <div style={{background: "#EEEEEE"}}>
      <NavBar/>
      <Conteiner/>
      <Modal/>
    </div>
  );
}

export default App;
