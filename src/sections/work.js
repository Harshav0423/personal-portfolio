import React from "react";
import "./work.css";
import walmart from "./../assets/walmart.jpeg";
import cognizant from "./../assets/cognizant.jpeg";
import { useDarkMode } from "../myContext";
import {MdWorkOutline} from 'react-icons/md'
const experience = [
	{
		title: "Software Engineer III Intern",
		company: "Walmart Global Tech",
		time: "05/2022 - 08/2022",
		image: walmart,
		details: [
			"Worked with the development of the Immunization Drop Off Web Application for associates in Walmart to administer vaccines, using NextJS, React-Native-Web, Express.",
			"Developed an Analytics dashboard based on the server-logs generated from the application trends, using Splunk.",
			"Wrote test cases for the components using Cypress and improved code coverage by 15%",
		],
	},
	{
		title: "Software Engineer",
		company: "Cognizant",
		time: "12/2019 - 07/2021",
		image: cognizant,
		details: [
			"Developed reusable front-end components using React JS, Redux",
			"Developed 6 end-to-end Restful services using Java, Spring Boot,Jpa and Kafka", "Generated Kafka events, and posting them on designated topics.",
			"Tested microservices using Postman and conducted unit testing of APIs using JUnit.",
			"Utilized Azure Kubernetes Service (AKS) for deploying and managing Docker containers",
		],
	},
];
function Work() {
	const { darkMode } = useDarkMode();
	return (
		<section id="work" className="work-section">
			<div className="work-container">
				<div className="work-head">
					<div className="work-img">
						<MdWorkOutline size="5rem" />
					</div>
					<div className="work-heading">
						<h1>Work Experience</h1>
					</div>
				</div>
				<div className="experience-list">
					{experience &&
						experience.map((e) => (
							<div
								className={`experience-item ${
									darkMode ? "dark-bg" : "light-bg"
								}`}
							>
								<div className="experience-period">
									<div className="experience-company">{e.company}</div>
									<div>{e.time}</div>
									<div>
										<img
											className="company-image"
											src={e.image}
											alt="company"
										/>
									</div>
								</div>
								<div className="experience-details">
									<h4 className="experience-title">{e.title}</h4>
									<div className="experience-desc">
										{e.details &&
											e.details.map((desc, index) => <p key={index}>{desc}</p>)}
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}

export default Work;
