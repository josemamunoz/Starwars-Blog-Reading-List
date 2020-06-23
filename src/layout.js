import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./js/store/appContext";

import { Navbar } from "./js/component/navbar";
import { Footer } from "./js/component/footer";
import { Search } from "./js/component/search";
import People from "./js/views/people";
import Planets from "./js/views/planets";
import Character from "./js/views/character";
import SinglePlanet from "./js/views/singleplanet";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
					<Navbar />
                    <Search/>
					<Switch>
						<Route exact path="/" component={People} />
						<Route exact path="/planets" component={Planets} />
						<Route exact path="/character/:id" component={Character} />
						<Route exact path="/planets/:id" component={SinglePlanet} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
