import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
	return (
		<div>
			<p className={css.option}>Good:{good}</p>
			<p className={css.option}>Neutral:{neutral}</p>
			<p className={css.option}>Bad:{bad}</p>
			<p className={css.option}>Total:{total}</p>
			<p className={css.option}>Positive feedback:{positiveFeedback}%</p>
		</div>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
