import React from "react";
import PropTypes from "prop-types";

//Cards
export function Cards(props) {
	return (
		<div className="col">
			<div className="card">
				<img
					className="card-img-top"
					src={props.card.image}
					alt={props.card.alt}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.card.title}</h5>
					<p className="card-text">{props.card.description}</p>
					<a href={props.card.url} className="btn btn-primary">
						{props.card.button}
					</a>
				</div>
			</div>
		</div>
	);
}

Cards.propTypes = {
	card: {
		image: PropTypes.string,
		alt: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		url: PropTypes.string,
		button: PropTypes.string
    }
};