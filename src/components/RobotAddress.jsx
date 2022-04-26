import React from "react";

const RobotAddress = ({ address }) => {
	return (
		<div style={{ color: "red" }}>
			RobotAddress
			<p>{address.zipcode}</p>
			<p>{address.street}</p>
			<p>{address.suite}</p>
		</div>
	);
};

export default RobotAddress;
