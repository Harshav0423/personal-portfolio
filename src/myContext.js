import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(true);
	const [addAnimation, setAddAnimation] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode((darkMode) => !darkMode);
	};
	const toggleAddAnimation = () => {
		setAddAnimation(true);
		setTimeout(() => {
			setAddAnimation(false);
		}, 2000);
	};

	return (
		<MyContext.Provider
			value={{ darkMode, toggleDarkMode, addAnimation, toggleAddAnimation }}
		>
			{children}
		</MyContext.Provider>
	);
}

export function useDarkMode() {
	return useContext(MyContext);
}
