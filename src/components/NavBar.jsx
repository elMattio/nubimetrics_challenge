import React from 'react';
import SearchBar from "./SearchBar"
import { connect } from "react-redux";
import { setPages, resetPagination } from "../actions/index"
import Navbar from 'react-bootstrap/Navbar'
import {Nav, NavDropdown} from 'react-bootstrap'

function NavBar({setPages, resetPagination}) {
  function onClick(num) {
    setPages(num);
    resetPagination();
  }
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>My-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <NavDropdown title="Paginacion" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => onClick(20)} href="">20 Productos</NavDropdown.Item>
        <NavDropdown.Item onClick={() => onClick(50)} href="">50 Productos</NavDropdown.Item>
        <NavDropdown.Item onClick={() => onClick(100)} href="">100 Productos</NavDropdown.Item>
      </NavDropdown>
      </Nav>
      <SearchBar/>
      </Navbar.Collapse>
    </Navbar>
    )
};

export default connect(null, { setPages, resetPagination })(NavBar)
