import React, { useState } from "react";
import RobotAddress from "./RobotAddress";

function RobotCard({ robot }) {
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick(!click);
	};

	return (
		<div className="robotcard">
			<h2>{robot.name}</h2>
			<h3>{robot.username}</h3>
			<a href={robot.email}>{robot.email} </a>
			<p>{robot.phone}</p>
			<a href={robot.website}>{robot.website}</a>
			<button type="button" onClick={handleClick}>
				Show Adress
			</button>
			{click ? <RobotAddress robot={robot} /> : null}
		</div>
	);
}

export default RobotCard;
