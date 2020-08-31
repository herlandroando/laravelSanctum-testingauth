import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink exact activeClassName="active" className="nav-link" to="/app">
                Dashboard
            </NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/app/add/population">
                Add Population
             </NavLink>
             <NavLink activeClassName="active" className="nav-link" to="/app/show/population">
                Show Population
             </NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/app/logout">
                Logout
            </NavLink>
        </nav>
    );
}
export default Header;
