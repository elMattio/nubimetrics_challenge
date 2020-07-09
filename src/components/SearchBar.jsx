import React, { useState } from "react";
import { connect } from "react-redux";
import { getItems } from "../actions/index"

function SearchBar({getItems}) {
  const [search, setSearch] = useState("");
  return (
    <form className="form-inline" onSubmit={(e) => {
      e.preventDefault();
      getItems(search);
    }}>
      <input 
        className="form-control mr-sm-2" 
        aria-label="Search"
        type="search"
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  );
};

export default connect(null, {getItems})(SearchBar)