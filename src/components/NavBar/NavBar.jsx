import React from 'react';
import SearchBar from "./SearchBar"
import { connect } from "react-redux";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import LoadignBar from "./LoadingBar";
import SortDropdown from "./dropdowns/SortDropdown";
import ConditionDropdown from "./dropdowns/ConditionDropdown";
import PagDropdown from "./dropdowns/PaginationDropdown";
import PriceDrpdwn from "./dropdowns/PriceDropdown";

function NavBar({ isLoading, items }) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Navbar.Brand>
          {!isLoading && "My-App"}
          {isLoading && <LoadignBar/>}
        </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <PagDropdown/>
          {items.length > 0 && <SortDropdown/>}
          {items.length > 0 && <ConditionDropdown/>}
          {items.length > 0 && <PriceDrpdwn/>}
        </Nav>
        <SearchBar/>
      </Navbar.Collapse>

    </Navbar>
    );
};

function mapStateToProps(state) {
  return {
      isLoading: state.isLoading,
      items: state.items
  };
};
export default connect(mapStateToProps)(NavBar);
