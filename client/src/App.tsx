import React, { useEffect } from "react";
import ModalRoot from "./modules/modal/components/ModalRoot";
import ModalService from "./modules/modal/services/ModalService";
import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/About/AboutMe";
import "./App.scss";
import Tiles from "./components/Tiles/Tiles";

const App = () => {
	return (
		<>
			<Navigation />
			<AboutMe />
			<ModalRoot />
			<Tiles />
		</>
	);
};

export default App;
