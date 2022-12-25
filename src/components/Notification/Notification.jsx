import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
	return (
		<span style={{ color: "tomato", fontWeight: 600, fontSize: 20 }}>
			{message}
		</span>
	);
};

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Notification;
