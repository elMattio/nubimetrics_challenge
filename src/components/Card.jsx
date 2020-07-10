import React from 'react';

export default function Producto ({title, thumbnail, price, availableQ, soldQ, listingTypeId, condition}) {
  
    return (
        <div class="card border-success mb-3" style={{display: "flex", flexDirection: "row", padding: 5}}>
            <div>
            <p style={{background: "black", textAlign: "center", color:"white", width: 90}}>{condition}</p>
            <img style={{width: 300}} src={thumbnail} alt=""/>
            </div>
             
            <div class="card-body">
              <h6 class="card-title">{title}</h6>
              <h5 class="card-text">$ {price}</h5>     
              <p class="card-text">{availableQ} disponibles</p>
              <p class="card-text">    {soldQ} vendidos</p> 
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <p class="card-text">{listingTypeId}</p>
                <a href="#" class="btn btn-outline-success my-2 my-sm-0">Detalles</a>
              </div> 
          </div>
      </div>
        
    );
};