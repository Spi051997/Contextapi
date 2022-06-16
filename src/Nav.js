import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

const Nav = () => {
  const navarray = [
    {
      id: 1,
      link: "Home",
      path: "/",
    },
    {
      id: 2,
      link: "Cart",
      path: "/cart",
    },
  ];
  return (
    <div>
      <div className="Navbar">
        {navarray.map(({ id, link, path }) => (
          <Link to={path} className="HomeLink" key={id}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Nav;
