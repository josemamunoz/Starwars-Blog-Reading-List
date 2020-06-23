import React from "react";
import { Link } from "react-router-dom";

export const Search = () => {
    return(
        <div className="container mb-3">
            <nav className="navbar navbar-dark bg-dark rounded">
              <form className="form-row w-100">
                <div className="col-10">
                  <input
                    className="form-control mr-sm-2 bg-dark"
                    type="search"
                    placeholder=" S E A R C H  D A T A B A N K"
                    aria-label="Search"
                  />
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-dark my-1 my-sm-0 btn-block"
                    type="submit"
                  >
                   <i className="fas fa-search mr-2"> </i> S E A R C H
                  </button>
                </div>
              </form>
            </nav>
          </div>
    )
}