import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useDarkMode } from "../myContext";
import "./education.css";
import { certification, education } from "../assets/educationListing";
function Education() {
	const { darkMode } = useDarkMode();
	return (
		<section id="education" className="education-section">
			<div className="education-container">
				<div className="education-head">
					<div className="education-img">
						<FaGraduationCap className="education-icon" />
					</div>
					<div className="education-heading">
						<h1>Education </h1>
						<h5>&nbsp;& Certifications</h5>
					</div>
				</div>
				<div className="education-list">
					{education &&
						education.map((e) => (
							<div
								className={`education-item ${
									darkMode ? "edu-dark-bg" : "light-bg"
								}`}
							>
								<div>
									<img className="school-image" src={e.image} alt={e.title} />
								</div>
								<div className="education-period">
									<div className="education-school">
										<h3>{e.degree}</h3>
										<h5 className="education-title">{e.school}</h5>
									</div>
									<div>{e.time}</div>
								</div>
							</div>
						))}
				</div>
				<div className="cert-list">
					{certification &&
						certification.map((cert) => (
							<div
								className={`cert-item ${
									darkMode ? "cert-dark-bg" : "light-bg"
								}`}
							>
								<div className="cert-head">
									<a
										href={cert.link}
										alt={cert.title}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="cert-badge"
											src={cert.badge}
											alt={cert.title}
										/>
									</a>
								</div>
								<div className="cert-details">
									<h3 className="cert-title">{cert.title}</h3>
									<h5 className="cert-provider">{cert.provider}</h5>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}

export default Education;
