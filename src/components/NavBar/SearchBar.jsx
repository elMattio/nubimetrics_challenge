import React, { useState } from "react";
import { connect } from "react-redux";
import { getItems, resetPagination, isLoading } from "../../actions/index";
import { Form, Button, FormControl } from "react-bootstrap";

function SearchBar({getItems, isLoading, resetPagination}) {
  const [search, setSearch] = useState("");
  return (
  <Form inline onSubmit={(e) => {
    e.preventDefault(); 
    isLoading();
    getItems(search);
    resetPagination();
    setSearch("");
    }}>
    <FormControl 
      type="search" 
      value={search} 
      onChange={e => setSearch(e.target.value)} 
      placeholder="Buscar..."
      className="mr-sm-2" />
    <Button className="d-none d-sm-block" type="submit" variant="outline-success">Search</Button>
  </Form>    
  );
};

export default connect(null, { getItems, resetPagination,isLoading })(SearchBar)