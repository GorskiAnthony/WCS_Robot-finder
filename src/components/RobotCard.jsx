import React from "react";
import RobotAddress from "./RobotAddress";

function RobotCard({ infoRobot }) {
	return (
		<div style={{ backgroundColor: "#F0F0F0" }}>
			<h2>{infoRobot.name}</h2>
			<p>{infoRobot.username}</p>
			<p>{infoRobot.phone}</p>
			<p>{infoRobot.email}</p>
			<p>{infoRobot.website}</p>
			<RobotAddress address={infoRobot.address} />
		</div>
	);
}
export default RobotCard;
