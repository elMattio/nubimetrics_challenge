import React from 'react'
import { connect } from "react-redux"
import { NavDropdown } from 'react-bootstrap'
import {conditionFilter} from "./utilities"
import { sortingItems } from "../actions/index"

function ConditionDropdown({ sortingItems, items, relItems }) {
    return (
      <NavDropdown title="Condicion" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => sortingItems(relItems)}>Todos</NavDropdown.Item>

        <NavDropdown.Divider />

        <NavDropdown.Item onClick={() => conditionFilter(relItems, sortingItems, "new")}>Nuevo</NavDropdown.Item>
        <NavDropdown.Item onClick={() => conditionFilter(relItems, sortingItems, "used")}>Usado</NavDropdown.Item>
      </NavDropdown> 
    )
};

function mapStateToProps(state) {
  return {
      items: state.items,
      relItems: state.relItems
  };
};
export default connect(mapStateToProps, {sortingItems})(ConditionDropdown);