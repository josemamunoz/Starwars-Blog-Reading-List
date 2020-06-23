import { Link } from "react-router-dom";
import "./navbar.css";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Dropdown } from "./dropdown";

export const Navbar = () => {
  const navStyle = {
    color: "white",
  };

  const {store} = useContext(Context);

  return (
    <>
      <div className="header mb-4 text-center" style={navStyle}>
        <div className="row logostarwars">
          <div className="col" id="logo"></div>
        </div>
        <div className="row">
          <div className="col">
            
          </div>
          <div className="botones col ">
            <Link className="nav-link" style={navStyle} to="/">
              <i className="swg swg-stormtrooper-3 swg-3x mr-3"></i> CHARACTERS
                  </Link>
          </div>
          <div className="botones col">
            <Link className="nav-link" style={navStyle} to="/planets">
              <i className="swg swg-falcon swg-3x mr-3"></i> PLANETS
                  </Link>
          </div>
          <div className="botones col">
            <Dropdown list={store.favorites}/>
          </div>
          <div className="col">

          </div>
        </div>
      </div>

    </>
  );
};
