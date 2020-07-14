import React from 'react'
import { connect } from "react-redux";
import { NavDropdown } from 'react-bootstrap';
import { sortingItems, resetPagination } from "../../../actions/index"
import {sortPriceL, sortPriceM, sortSoldL, sortSoldM, originalSort} from "./utilities/utilities"

function SortDropdown({items, relItems, sortingItems}) {
    return (
      <NavDropdown title="Ordenar publicaciones" id="basic-nav-dropdown">

        <NavDropdown.Item onClick={() => originalSort(relItems, sortingItems)} >Mas relevantes</NavDropdown.Item>

        <NavDropdown.Divider />

        <NavDropdown.Item onClick={() => sortPriceL(items, sortingItems)} >Menor precio</NavDropdown.Item>
        <NavDropdown.Item onClick={() => sortPriceM(items, sortingItems)} >Mayor precio</NavDropdown.Item>
 
        <NavDropdown.Divider />
 
        <NavDropdown.Item onClick={() => sortSoldM(items, sortingItems)} >Mas vendidos</NavDropdown.Item>
        <NavDropdown.Item onClick={() => sortSoldL(items, sortingItems)} >Menos vendidos</NavDropdown.Item>
      </NavDropdown> 
    )
};

function mapStateToProps(state) {
    return {
        items: state.items,
        relItems: state.relItems
    };
};

export default connect(mapStateToProps, { sortingItems, resetPagination })(SortDropdown);

