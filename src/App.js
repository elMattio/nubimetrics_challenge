import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Conteiner from "./components/container/Conteiner";
import Modal from "./components/container/Modal";

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
