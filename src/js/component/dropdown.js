import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const Dropdown = (lista) => {

    const {store, actions} = useContext(Context);


    return (

        <div className="dropdown mt-3">
            <button className="btn btn-dark btn-block border-0 bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-star mr-2"></i>FAVORITES - {store.favorites.length} -
            </button>
            
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" >
            {store.favorites.length === 0 ? 
                <div className="dropdown-item" >
                    <i className="fas fa-star"></i>Agregar un favorito<button type="button" className="close" aria-label="Close"></button>
                </div>
                :
                store.favorites.map((item, index,) =>{

                return(
                
                <div className="dropdown-item" key={index}>
                    <i className="fas fa-star"></i>{item.favorite}<button type="button" className="close" aria-label="Close" onClick={()=> actions.removeFavorites(item, index)}><span aria-hidden="true">&times;</span></button>
                </div>)})}
                
            </div>
            
        </div>
    )};