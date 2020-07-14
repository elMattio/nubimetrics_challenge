import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { setPages, resetPagination } from "../../../actions/index";

function PagDropdown({setPages, resetPagination}) {
    function onClick(num) {
        setPages(num);
        resetPagination();
    };
    return (
        <NavDropdown title="Paginacion" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={() => onClick(20)} href="">20 Productos</NavDropdown.Item>
          <NavDropdown.Item onClick={() => onClick(50)} href="">50 Productos</NavDropdown.Item>
          <NavDropdown.Item onClick={() => onClick(100)} href="">100 Productos</NavDropdown.Item>
      </NavDropdown>
    );
};

export default connect(null, { setPages, resetPagination })(PagDropdown);
