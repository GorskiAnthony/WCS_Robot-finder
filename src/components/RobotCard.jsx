import React, { useState } from "react";
import RobotAddress from "./RobotAddress";
const RobotCard = ({ robot }) => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	return (
		<div className="block">
			<h2>{robot.name}</h2>
			<h3>{robot.username}</h3>
			<p>{robot.phone}</p>
			<p>{robot.email}</p>
			<a href={robot.website}>{robot.website}</a>
			<button type="button" onClick={handleClick}>
				Show address
			</button>
			{click ? <RobotAddress address={robot.address} /> : null}
		</div>
	);
};

export default RobotCard;
