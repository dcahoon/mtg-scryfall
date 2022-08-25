import React from "react";
import { Link } from "react-router-dom";

/**
 * @returns {JSX.Element}
 */
function Menu() {
	return (
		<nav className="nav-menu">
            <Link className="nav-link" to="/dashboard">
                <span className="" />
                Decks
            </Link>
            <Link className="nav-link" to="/search">
                <span className="" />
                Search
            </Link>
            <Link className="nav-link" to="/random">
                Random Card
            </Link>
        </nav>
	);
}

export default Menu;