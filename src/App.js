import "./App.css";
import Header from "./Components/header";
import { useDarkMode } from "./myContext";
import Education from "./sections/education";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Welcome from "./sections/welcome";
import Work from "./sections/work";

function App() {
	const { darkMode } = useDarkMode();
	return (
		<div className={darkMode ? "dark" : "light"}>
			<div className="content">
				<div className="header">
					<Header />
				</div>
				<Welcome />
				<Skills/>
				<Work />
				<Projects />
				<Education />
			</div>
		</div>
	);
}

export default App;
