import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = (favorites) => {
    
  const { actions } = useContext(Context);
 
    return (
      <>
         <button type="button" className="btn btn-outline-warning" onClick={()=>actions.getFavorites(favorites)}>
            <i className="fas fa-star"></i>
        </button>
      </>
    );
  };
  