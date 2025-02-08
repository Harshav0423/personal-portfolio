import React from "react";
import SocialIcons from "../Components/socialIcons";
import "./welcome.css";
import profilePhoto from "./../assets/pp.jpg";
export default function Welcome() {
	return (
		<section id="home" className="welcome">
			<div className="info">
				<div className="welcome-image">
					<img
						className="profile-picture"
						src={profilePhoto}
						alt="profile picture"
						height="220"
						width="220"
					/>
				</div>
				<div className="welcome-content">
					<p className="welcome-text">
							Currently employed as a Software Engineer at Walmart.
							I am a detail-oriented developer with
							strong problem-solving and analytical skills, enthusiastic about building innovative solutions.
							My skill set includes Python, Java, JavaScript, React, Node.js, and  with extensive experience in creating scalable applications and services.
					</p>
				</div>
			</div>
			<SocialIcons />
		</section>
	);
}
