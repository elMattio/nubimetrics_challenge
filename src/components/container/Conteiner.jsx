import React from 'react';
import { connect } from "react-redux";
import Card from "./Card";
import Pagination from "./Pagination";

function Conteiner({items, activePage, pages}) {
  var a = items.slice((activePage - 1)*pages, (activePage*pages))
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        {a.map((p, i) => 
        <div key={i}>
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
      <div>
      {items[0] && <Pagination itemsQ={items.length}/>}
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
      items: state.items,
      activePage: state.pagination.active,
      pages: state.pagination.pages
  }
};
export default connect(mapStateToProps)(Conteiner);