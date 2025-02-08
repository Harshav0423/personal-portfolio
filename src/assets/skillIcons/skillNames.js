import angular from "./angular.png";
import aws from "./aws.png";
import cpp from "./cpp.png";
import css from "./css.png";
import docker from "./docker.png";
import flask from "./flask.png";
import git from "./git.png";
import html from "./html.png";
import java from "./java.png";
import javascript from "./javascript.png";
import kafka from "./kafka.png";
import mongodb from "./mongodb.jpeg";
import mysql from "./mysql.png";
import nextjs from "./nextjs.png";
import postgres from "./postgres.png";
import python from "./python.png";
import react from "./react.png";
import rest from "./rest.jpeg";
import spring from "./spring.png";
import typescript from "./typescript.png";
import django from "./django.png";

const fenames = [
	[react, "React JS"],
	[typescript, "TypeScript"],
	[javascript, "JavaScript"],
	[angular, "Angular"],
	[html, "HTML"],
	[css, "CSS"],
];
const fwnames = [
	[spring, "Spring"],
	[nextjs, "Next.js"],
	[django, "Django"],
	[flask, "Flask"],
];
const dbnames = [
	[mysql, "MySQL"],
	[postgres, "PostgreSQL"],
	[mongodb, "MongoDB"],
];
const lnames = [
	[java, "Java"],
	[python, "Python"],
	[cpp, "C++"],
];
const dvpnames = [
	[git, "Git"],
	[docker, "Docker"],
	[aws, "AWS"],
	[rest, "Rest"],
];

const names = [
	...lnames,
	[kafka, "Kafka"],
	...dbnames,
	...dvpnames,
	...fenames,
	...fwnames,
];
export default names;
export { fenames, fwnames, dbnames, lnames, dvpnames };
