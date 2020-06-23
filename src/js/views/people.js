import React, { useContext } from "react";
import "./people.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Favorites } from "../component/favorites";



function People() {

  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row row-col-5 row-col-5-sm-2 row-col-sm-4">
        {store.people.map((item, index,) => (
          <div className="people col-3 mb-4" key={item.name}>
            <div className="card h-100 border-dark">
              <img
                src={`/img/${item.name}.jpg`}
                className="card-img-top border-danger border-bottom"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{item.name} </h5>
                <ul className="caracteristicas">
                  <li> height : {item.height}</li>
                  <li> mass : {item.mass}</li>
                  <li> hair color : {item.hair_color}</li>
                  <li> gender : {item.gender}</li>
                </ul>
                <div className="container">
                  <div className="row">
                    <div className="col-8">
                      <button
                        type="button"
                        className="LearnMore btn btn-outline-primary"
                      >
                        <Link to={`/character/${index + 1}`}>Learn more!</Link>
                      </button>
                    </div>
                    <div className="col-4">
                    <Favorites favorite={item.name}/>
                    </div>
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
            <button type="button" className="btn btn-dark" onClick={() => actions.getPeople(store.previouspeople)}>PREVIOUS</button>
            <button type="button" className="btn btn-dark" onClick={() => actions.getPeople(store.nextpeople)}>NEXT PAGE</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default People;
