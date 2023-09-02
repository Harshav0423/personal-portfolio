import React, { useState } from "react";
import "./skillFilter.css";
function SkillFilter({setSelectedSkill}) {
	const names = [
		"All",
		"Frontend",
		"Languages",
		"Databases",
		"Frameworks",
		"Development",
	];
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	function handleItemClick(idx) {
		setSelectedItemIndex(idx);
	}
	return (
		<div className="skill-filter-container">
			<div className="skill-filter-list">
				{names &&
					names.map((name, idx) => (
						<div
							className={`skill-filter-item ${
								selectedItemIndex === idx ? "item-active" : ""
							}`}
							onClick={() => {setSelectedSkill(name.toLowerCase())
                                handleItemClick(idx)}}
						>
							{name}
						</div>
					))}
			</div>
		</div>
	);
}

export default SkillFilter;
