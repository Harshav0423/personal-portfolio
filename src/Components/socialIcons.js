import React, { useEffect } from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import "./socialIcons.css";
import { useDarkMode } from "../myContext";
function SocialIcons() {
	const { addAnimation,setAddAnimation } = useDarkMode();
	useEffect(()=>{
		console.log("animation", addAnimation)
	}, [addAnimation])
	return (
		<div className={`social-icons ${addAnimation ? "slideIn" : ""}`}>
			<a href="https://www.linkedin.com/in/harsha-valiveti" target="_blank">
				<BsLinkedin size="2em" />
			</a>
			<a href="mailto:harsha.valiveti98@gmail.com">
				<BiLogoGmail size="2em" />
			</a>
			<a href="https://www.github.com/Harshav0423">
				<BsGithub size="2em" />
			</a>
			<a href="https://www.twitter.com">
				<BsTwitter size="2em" />
			</a>
		</div>
	);
}

export default SocialIcons;
