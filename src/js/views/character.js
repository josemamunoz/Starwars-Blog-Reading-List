import React, { useContext } from "react";
import "./character.css"
import { Context } from "../store/appContext";



function Character({match}){

    const {store} = useContext(Context)


    return(
        <>
        <div className="details container py-3 my-5 bg-dark">
            <div className="row">
                <div className="col-sm border-danger border-right">
                    <img src={`/img/${store.people != null ? store.people[match.params.id-1].name : "title"}.jpg`} className="card-img-top" alt=""/>
                </div>
                <div className="col-sm text-justify">
                    <h2>{store.people != null ? store.people[match.params.id-1].name : "title"}</h2>
                    <br/>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
                    </p>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm border-danger border-right">
                    <h5>Bird year: {store.people != null ? store.people[match.params.id-1].birth_year : "title"}</h5>
                    <p></p>
                </div>
                <div className="col-sm border-danger border-right">
                    <h5>Height: {store.people != null ? store.people[match.params.id-1].height : "title"}</h5>
                    <p></p>
                </div>
                <div className="col-sm border-danger border-right">
                    <h5>Mass: {store.people != null ? store.people[match.params.id-1].mass : "title"}</h5>
                    <p></p>
                </div>
                <div className="col-sm border-danger border-right">
                    <h5>Gender: {store.people != null ? store.people[match.params.id-1].gender : "title"}</h5>
                    <p></p>
                </div>
                <div className="col-sm border-danger border-right">
                    <h5>Skin color: {store.people != null ? store.people[match.params.id-1].skin_color : "title"}</h5>
                    <p></p>
                </div>
                <div className="col-sm">
                    <h5>Eye color: {store.people != null ? store.people[match.params.id-1].eye_color : "title"}</h5>
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

export default Character;