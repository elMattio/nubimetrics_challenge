import React from 'react';
//aqui va navlink importado
import SearchBar from "./SearchBar"

export default function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
          <SearchBar/>
        </nav>
    )
}
