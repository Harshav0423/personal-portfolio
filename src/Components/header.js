import React, { useEffect, useState } from "react";
import "./header.css";
import { BsSun, BsMoon } from "react-icons/bs";
import { useDarkMode } from "../myContext";
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function Header() {
	const { darkMode, toggleDarkMode, addAnimation, toggleAddAnimation } =
		useDarkMode();
	const [scroll, setScroll] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	function scrollToSection(targetId) {
		const targetSection = document.querySelector(targetId);
		if (targetSection) {
			const scrollToPosition = targetSection.offsetTop - 80;

			window.scrollTo({
				top: scrollToPosition,
				behavior: "smooth",
			});
		}
	}
	function handleScroll() {
		if (window.pageYOffset > 100) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	}
	useEffect(() => {
		const navLinks = document.querySelectorAll("nav a");

		navLinks.forEach((link) => {
			link.addEventListener("click", (event) => {
				event.preventDefault();
				const targetId = link.getAttribute("href");
				scrollToSection(targetId);
			});
		});

		return () => {
			navLinks.forEach((link) => {
				link.removeEventListener("click", scrollToSection);
			});
		};
	}, []);
	useEffect(() => {
		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav>
			<div
				className={
					"scrollup" +
					(scroll ? " show" : "") +
					(darkMode ? "" : " scroll-light-bg")
				}
			>
				<a href="#home">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						viewBox="0 0 24 24"
						fill={`${darkMode ? "black" : "white"}`}
						border-radius="2"
						className="scrollup-icon"
					>
						<path d="M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"></path>
					</svg>
				</a>
			</div>
			<div className="nav-container">
				<div className="home-icon">
					<a href="#home" className="nav-link name">
						Harsha
					</a>
				</div>
				<div className="navigation">
					<ul className="navbar">
						<li className="nav-item">
							<a href="#home" className="nav-link">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#education" className="nav-link">
								Education
							</a>
						</li>
						<li className="nav-item">
							<a href="#skills" className="nav-link">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a href="#projects" className="nav-link">
								Projects
							</a>
						</li>
						{/* <li className="nav-item">
							<a href="#blog" className="nav-link">
								Blog
							</a>
						</li> */}
						<li className="nav-item" onClick={toggleAddAnimation}>
							<a className="nav-link">Contact</a>
						</li>
						<button
							className={darkMode ? `dark-mode btn-mode` : `btn-mode`}
							onClick={toggleDarkMode}
						>
							{darkMode ? (
								<BsMoon size="2em" />
							) : (
								<BsSun size="2em" color="white" />
							)}
						</button>
					</ul>
				</div>
				<div className="nav-menu">
					<BiMenu
						size="2rem"
						onClick={() => {
							setShowMenu(true);
						}}
					/>
					{showMenu && (
						<div className="nav-menu-container">
							<AiOutlineCloseCircle
								size="2rem"
								onClick={() => {
									setShowMenu(false);
								}}
							/>
							<ul className="nav-menu-box">
								{["home", "education", "skills", "projects", "contact"].map(
									(item) => (
										<li
											className="nav-item"
											onClick={() => {
												setShowMenu(false);
											}}
										>
											<a href={`#${item}`} className="nav-link">
												{item}
											</a>
										</li>
									)
								)}
								<button
									className={darkMode ? `dark-mode btn-mode` : `btn-mode`}
									onClick={() => {
										toggleDarkMode();
										setShowMenu(false);
										
									}}
								>
									{darkMode ? (
										<BsMoon size="2em" />
									) : (
										<BsSun size="2em" color="white" />
									)}
								</button>
							</ul>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
