import React from "react";

function RobotAddress({ address }) {
	return (
		<div style={{ color: "red" }}>
			<p>{address.zipcode}</p>
			<p>{address.city}</p>
			<p>{address.street}</p>
		</div>
	);
}

export default RobotAddress;
