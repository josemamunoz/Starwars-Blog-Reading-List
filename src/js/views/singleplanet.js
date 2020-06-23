import React, { useContext } from "react";
import "./character.css"
import { Context } from "../store/appContext";



function SinglePlanet({match}){

    const {store} = useContext(Context)


    return(
        <>
        <div className="details container py-3 my-5 bg-dark">
            <div className="row">
                <div className="col-sm border-danger border-right">
                    <img src={`/img/${store.planets != null ? store.planets[match.params.id-1].name : "title"}.jpg`} className="card-img-top" alt=""/>
                </div>
                <div className="col-sm text-justify">
                    <h2>{store.planets != null ? store.planets[match.params.id-1].name : "title"}</h2>
                    <br/>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
                    </p>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm border-danger border-right">
                    <h5>Climate: {store.planets != null ? store.planets[match.params.id-1].climate : "title"}</h5>
                    <p></p>
                </div>
                <div className="col-sm border-danger border-right">
                    <h5>Rotation period: {store.planets != null ? store.planets[match.params.id-1].rotation_period : "title"}</h5>
                    <p></p>
                </div>
                <div className="col-sm border-danger border-right">
                    <h5>Orbital period: {store.planets != null ? store.planets[match.params.id-1].orbital_period : "title"}</h5>
                    <p></p>
                </div>
                <div className="col-sm border-danger border-right">
                    <h5>Diameter: {store.planets != null ? store.planets[match.params.id-1].diameter : "title"}</h5>
                    <p></p>
                </div>
                <div className="col-sm border-danger border-right">
                    <h5>Gravity: {store.planets != null ? store.planets[match.params.id-1].gravity : "title"}</h5>
                    <p></p>
                </div>
                <div className="col-sm">
                    <h5>Population: {store.planets != null ? store.planets[match.params.id-1].population : "title"}</h5>
                    <p></p>
                </div>
            </div>
            

        </div>
        <div className="footer mw-100" >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/> 
            <br/>
            <br/>
        </div>
        </>
    )
}

export default SinglePlanet;