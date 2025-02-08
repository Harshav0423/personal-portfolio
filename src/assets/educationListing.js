import { iub, klu, awsCCP, secplus, adsCE, } from "./images";
const certification = [
	{title: "Security+ Y701",
		provider: "CompTIA",
		badge: secplus,
		link: "https://www.credly.com/badges/723efd73-5fad-42d7-8824-966b5b85d723"
	},
	{
		title: "AWS Certified Cloud Practitioner",
		provider: "AWS Certification",
		badge: awsCCP,
		link: "https://www.credly.com/badges/c99458af-5bc0-4da0-bea6-8d3d203ec893/public_url",
	},
	{
		title: "Applied Data Science Capstone",
		provider: "Courseera IBM",
		badge: adsCE,
		link: "https://www.credly.com/badges/9fdb8e0f-01a3-4bdc-9531-36ee343c6984/public_url",
	},
];
const education = [
	{
		school: "Indiana University Bloomington",
		time: "08/2021 - 05/2023",
		degree: "MS in Computer Science",
		image: iub,
	},
	{
		school: "KL University",
		time: "06/2016 - 05/2020",
		degree: "BTech in Computer Science and Engineering",
		image: klu,
	},
];

export {education, certification};