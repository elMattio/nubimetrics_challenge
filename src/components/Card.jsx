import React, { useState } from 'react';
import { connect } from "react-redux";
import { openModal } from "../actions/index";
import "./Card.css"

function Cad ({title, thumbnail, price, availableQ, soldQ, listingTypeId, condition, openModal}) {

  const [onOver, setOver] = useState("");
    return (
    <div 
    onMouseEnter={()=>setOver("id")} 
    onMouseLeave={()=>setOver("")} 
    onClick={() => openModal(listingTypeId)} 
    id={onOver} className="wrapper"> 
      <img className="img" src={thumbnail} alt=""/>
      <div className="condition">{condition}</div>
      <div className="title">{title}</div>
      <div className="price">$ {price}</div>
      <div className="aQuantity">{availableQ} disponibles</div>
      <div className="sQuantity">{soldQ} vendidos</div>
      <div className="id">{listingTypeId}</div>
    </div>    
    );
};

export default connect(null, {openModal})(Cad)