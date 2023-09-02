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
						height='220'
						width='220'
					/>
				</div>
				<div className="welcome-content">
					<p>
						Hi I'm Harsha Valiveti, a recent Computer Science graduate student
						from IUB. I'm passionate about building innovative and user-friendly
						software. I'm skilled in Java, Python and C++, and I have 2yrs+
						experience in working as Software Engineer. I'm always eager to
						learn new things. I'm currently looking for Full-Time roles in
						Software Engineering, Machine Learning and Data Engineering, with
						immediate join.
					</p>
					<p>
						In my spare time, I enjoy building fun projects, playing Badminton
						and recently started reading books on sci-fi.
					</p>
				</div>
			</div>
			<SocialIcons />
		</section>
	);
}
