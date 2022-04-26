import React from "react";
/** Import de la donnée */
import "./App.css";
import RobotCard from "./components/RobotCard";
import Robots from "./data/data";

function App() {
	/**
	 * Ne pas toucher
	 */
	console.clear();
	/**
	 * Ne pas toucher
	 */

	/**
	 * Ordre
	 * Oscar -> Ali -> Christophe -> Gloria -> Basile -> Oscar -> Ali -> ...
	 * Temps: 3min
	 */

	/** Consigne */
	/**
	 * 4/ Création d'un composant `<RobotAddress />` permettant d'afficher les informations de l'adresse (Suite, zipcode, city). Import et mise en place dans le `<RobotCard />`. Puis, on va ajouter un bouton _toggle_ permettant d'afficher ou non l'adresse. Ajout d'un state [display, setDisplay] initialisé à false. Onclick sur le bouton, on inverse la valeur de display (** si true, alors false et si false alors true **). Puis on se sert de cette valeur pour afficher ou non les infos adresse avec un opérateur ternaire. Intégrer le css de cette nouvelle étape pour finir.
	 */

	console.log(Robots);
	return (
		<div className="App">
			<h1>Robot Finder</h1>
			{Robots.map((robot, i) => {
				return <RobotCard key={i} infoRobot={robot} />;
			})}
		</div>
	);
}

export default App;
