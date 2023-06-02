import React, { useState, useEffect } from "react";
import ModalRoot from "./modules/modal/components/ModalRoot";
import ModalService from "./modules/modal/services/ModalService";
import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/About/AboutMe";
import "./App.scss";
import Tiles from "./components/Tiles/Tiles";

const App = () => {
	const [matches, setMatches] = useState(
		window.matchMedia("(min-width: 600px)").matches
	);

	useEffect(() => {
		window
			.matchMedia("(min-width: 600px)")
			.addEventListener("change", (e) => setMatches(e.matches));
	}, []);

	return (
		<>
			<Navigation matches={matches} />
			<AboutMe />
			<ModalRoot matches={matches} />
			<Tiles />
		</>
	);
};

export default App;
