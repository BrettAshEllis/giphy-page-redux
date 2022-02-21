import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Menu() {
    const { activeUser } = useContext(UserContext);
    return (
        <nav className="menu flex">
            {!activeUser && (
                <NavLink
                    className={({ isActive }) =>
                        (isActive ? "active" : "link") + " text-center"
                    }
                    to="login"
                >
                    Login
                </NavLink>
            )}
            {activeUser && (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            (isActive ? "active" : "link") + " text-center"
                        }
                        to="search"
                    >
                        Search
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            (isActive ? "active" : "link") + " text-center"
                        }
                        to="favorites"
                    >
                        Favorites
                    </NavLink>
                </>
            )}
        </nav>
    );
}

export default Menu;
