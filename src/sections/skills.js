import React, { useEffect, useState } from "react";
import SkillFilter from "../Components/skillFilter.js";
import allnames, {
	dbnames,
	dvpnames,
	fenames,
	fwnames,
	lnames,
} from "./../assets/skillIcons/skillNames.js";
import "./skills.css";
function Skills() {
	
	const [selectedSkill, setSelectedSkill] = useState("all");
	const names = {
		all: allnames,
		frontend: fenames,
		languages: lnames,
		databases: dbnames,
		development: dvpnames,
		frameworks: fwnames,
	};

	return (
		<section id="skills" className="skill-section">
			<SkillFilter setSelectedSkill={setSelectedSkill} />
			<div className="skill-list">
				{names[selectedSkill] &&
					names[selectedSkill]?.map((skill) => (
						<div className="skill-item" key={skill[1]}>
							<div className="skill-icon">
								<img className="skill-img" src={skill[0]} alt={skill[1]} />
							</div>
							<p className="skill-name">{skill[1]}</p>
						</div>
					))}
			</div>
		</section>
	);
}

export default Skills;
