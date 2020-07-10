import React, {useEffect}from 'react';
import { connect } from "react-redux";
import Card from "./Card";

function Conteiner({items}) {
    useEffect(() => console.log(items));
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 30}}>
      <div style={{ width: 1000}}>
        {items.map(p => 
        <div>
          <Card 
            title={p.title}
            thumbnail={p.thumbnail}
            price={p.price}
            availableQ={p.available_quantity}
            soldQ={p.sold_quantity}
            listingTypeId={p.id}
            condition={p.condition}
          /> 
        </div>)}
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
      items: state.items
  }
}
export default connect(mapStateToProps)(Conteiner);