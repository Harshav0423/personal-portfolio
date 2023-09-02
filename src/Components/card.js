import React from "react";
import { BsGithub } from "react-icons/bs";
import { useDarkMode } from "../myContext";
import "./card.css";
function Card({ title, image, desc, link }) {
	const { darkMode } = useDarkMode();
	return (
		<div className={`card ${darkMode ? "card-bg-dark" : ""}`}>
			<div className="image-box">
				<a href={link} alt={title} target="_blank" rel="noopener noreferrer">
					<img className="card-image" src={image} alt={title} />
				</a>
			</div>
			<div className="card-body">
				<h4 className="card-title">{title}</h4>
				<p className="card-desc">{desc}</p>
				{link && (
					<div className="card-link" title="github">
						<a
							href={link}
							alt={title}
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsGithub size="1rem" />
						</a>
					</div>
				)}
			</div>
		</div>
	);
}

export default Card;
