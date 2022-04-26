import React from "react";

function RobotAddress({ robot }) {
	console.log(robot);
	return (
		<div style={{ backgroundColor: "blue" }}>
			<h2>{robot.address.suite}</h2>
			<h3>{robot.address.city} </h3>
			<h4>{robot.address.zipcode}</h4>
		</div>
	);
}

export default RobotAddress;
