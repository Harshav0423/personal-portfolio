import React, { useState } from "react";
import Card from "../Components/card";
import "./projects.css";
import { useDarkMode } from "../myContext";
import { FaProjectDiagram } from "react-icons/fa";
import { topProjects, secondaryProjects } from "./../assets/projectListing";
function Projects() {
	const { darkMode } = useDarkMode();
	const [showOther, setShowOther] = useState(false);
	const handleShowmore = () => {
		setShowOther(!showOther);
	};
	return (
		<section id="projects" className="projects-section">
			<div className="projects-container">
				<div className="project-head">
					<div className="project-img">
						<FaProjectDiagram size="5rem" />
					</div>
					<div className="project-heading">
						<h1>Projects</h1>
					</div>
				</div>
				<div className="projects-list">
					{topProjects &&
						topProjects?.map((project, idx) => (
							<Card
								key={idx}
								title={project.title}
								image={project.image}
								desc={project.desc}
								link={project.link}
							/>
						))}
					{showOther &&
						secondaryProjects &&
						secondaryProjects?.map((project, idx) => (
							<Card
								key={idx}
								title={project.title}
								image={project.image}
								desc={project.desc}
								link={project.link}
							/>
						))}
					<div className="show-more">
						<button className="show-more-btn" onClick={handleShowmore}>
							{showOther ? "Show Less" : "Show More"}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
