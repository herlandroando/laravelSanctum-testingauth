import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <NavLink exact activeClassName="active" to="/app">
                Dashboard
            </NavLink>
            <NavLink activeClassName="active" to="/app/population">
                Population
             </NavLink>
            <NavLink activeClassName="active" to="/app/logout">
                Logout
            </NavLink>
        </nav>
    );
}
export default Header;
