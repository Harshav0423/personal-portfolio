import {
	microservices,
	cityconnection,
	dataViz,
	fileSystem,
	gigsnchill,
	horizonDetection,
	personalPortfolio,
	puzzleSolver,
	tetris,
} from "./images";
const topProjects = [
	{
		title: "Personal Portfolio",
		desc: "Designed a personal website to showcase my expertise, background ",
		link: "https://github.com/Harshav0423/personal-portfolio",
		image: personalPortfolio,
	},
	{
		title: "ShopHub microservices",
		desc: "Developed an E-commerce site using React JS, JavaScript, CSS and backend with Spring microservices and AWS, PostgreSQL.",
		link: "https://github.com/Harshav0423/ShopHub",
		image: microservices,
	},
	{
		title: "Implemented Files System",
		desc: "Implemented File System (dir, file creation, read and write) in QemuOS, in C",
		link: "https://github.com/Harshav0423/xinu-S22",
		image: fileSystem,
	},
	{
		title: "Promoting Local Events GigsNChill",
		desc: "Developed a web application to promote local events in a city, using React JS, CSS, Heroku, Django, MySQL.",
		link: "https://github.com/Harshav0423/GigsNChill",
		image: gigsnchill,
	},

	{
		title: "IPL Data Visualization",
		desc: "The outcome of IPL Cricket matches are significant, with the help of IPL dataset, prepared data to show the key data intensive insights of teams, batsmen, bowler,.. .",
		link: "https://github.com/Harshav0423/IPL-Data-Visualization",
		image: dataViz,
	},
];
const secondaryProjects = [
	{
		title: "Horizon Line Detection",
		desc: "Improved the detection of Air-Ice and Ice-Rock boundary using Hidden Markov Model (HMM), Viterbi with Human Feedback achieved great efficiency in tracking.",
		link: "https://github.com/Harshav0423/Horizon-Detection",
		image: horizonDetection,
	},
	{
		title: "2021 Puzzle Solver",
		desc: "Designed a Heuristic with A* algorithm to arrange all the tiles in sequence order.",
		link: "https://github.com/Harshav0423/2021-Puzzle",
		image: puzzleSolver,
	},
	{
		title: "Maps to get the shortest route between cities",
		desc: "Implemented A* alogorithm on Maps data to find the least route possible in connecting all the given cities.",
		link: "https://github.com/Harshav0423/City-Maps",
		image: cityconnection,
	},
	{
		title: "Game of Tetris AI (Building Blocks)",
		desc: "Designed a Heuristic search and Expecti - minimax algorithm to estimate the distribution of blocks in space/orientation to get the high score.",
		link: "https://github.com/Harshav0423/Game-Of-Quintris",
		image: tetris,
	},
];

export {topProjects, secondaryProjects}