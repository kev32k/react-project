import React from "react";

import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./component/jumbotron.js";
import { Cards } from "./component/cards.js";
import { Footer } from "./component/footer";

const carta = {
	image: "http://placehold.it/500x325.jpg",
	alt: "rigo",
	title: "Hello Rigo",
	description: "loesk ksksksksksks",
	url: "http://wikipedia.com",
	button: "click here"
};

//create layout
export function App() {
	return (
		<div className="text-center">
			<Navbar />

			<div className="container">
				<Jumbotron />

				<div className="row">
					<div className="col">
						<Cards card={carta} />
					</div>
					<div className="col">
						<Cards card={carta} />
					</div>
					<div className="col">
						<Cards card={carta} />
					</div>
					<div className="col">
						<Cards card={carta} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}