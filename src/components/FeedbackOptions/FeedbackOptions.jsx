import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onClick }) => {
	const options = ["Good", "Neutral", "Bad"];
	return (
		<div className={css.feedbackOptions}>
			{options.map((option) => {
				return (
					<Button key={option} onClick={onClick} variant="primary">
						{option}
					</Button>
				);
			})}
		</div>
	);
};

FeedbackOptions.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
