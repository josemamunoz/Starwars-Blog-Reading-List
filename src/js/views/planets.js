import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./planets.css"
import { Context } from "../store/appContext"
import { Favorites } from "../component/favorites";


function Planets() {
 
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4">
      {store.planets.map((item, index,) => (
          <div className="planets col mb-4" key={item.name}>
            <div className="card h-100 border-dark">
              <img src={`/img/${item.name}.jpg`} className="card-img-top border-danger border-bottom" alt=""/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <ul className="caracteristicas">
                  <li> rotation period : {item.rotation_period}</li>
                  <li> orbital period : {item.orbital_period}</li>
                  <li> diameter : {item.diameter}</li>
                  <li> climate : {item.climate}</li>
                </ul>
                <div className="row justify-contet-between">
                  <div className="col-9">
                    <button type="button" className="btn btn-outline-primary">
                      <Link to={`/planets/${index + 1}`}>Learn more!</Link>
                    </button>
                  </div>
                  <div className="col-3">
                    <Favorites favorite={item.name}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="row justify-content-center bg-dark pb-3 rounded-lg">
          <nav className="pt-4 rounded-lg" aria-label="Page navigation">
            <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-dark" onClick={() => actions.getPlanets(store.previousplanet)}>PREVIOUS</button>
            <button type="button" className="btn btn-dark" onClick={() => actions.getPlanets(store.nextplanet)}>NEXT PAGE</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Planets;
