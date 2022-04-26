import React from "react";
/** Import de la donnée */
import "./App.css";

import Robots from "./data/data";

import RobotCard from "./components/RobotCard";

function App() {
	/** ⚠️ Don't touch */
	console.clear();
	/** Don't touch */

	console.log(Robots);
	return (
		<div className="App">
			{Robots.map((robot, key) => (
				<RobotCard key={key} robot={robot} />
			))}
	
		</div>
	);
}

export default App;
