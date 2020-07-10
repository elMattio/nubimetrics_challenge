import React from 'react';

export default function Producto ({title, thumbnail, price, availableQ, soldQ, listingTypeId, condition}) {
  
    return (
        <div className="card border-success mb-3" style={{display: "flex", flexDirection: "row", padding: 5}}>
            <div>
              <p style={{background: "#343A40", textAlign: "center", color:"white", width: 90}}>{condition}</p>
              <img style={{width: 300}} src={thumbnail} alt=""/>
            </div>
             
            <div className="card-body">
              <h6 className="card-title">{title}</h6>
              <h5 className="card-text">$ {price}</h5>     
              <p className="card-text">{availableQ} disponibles</p>
              <p className="card-text">    {soldQ} vendidos</p> 
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <p className="card-text">{listingTypeId}</p>
                <a href="https://www.youtube.com/" class="btn btn-outline-success my-2 my-sm-0">Detalles</a>
              </div> 
          </div>
      </div>
        
    );
};