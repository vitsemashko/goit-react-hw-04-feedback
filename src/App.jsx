import React from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
	const [good, setGood] = React.useState(0);
	const [neutral, setNeutral] = React.useState(0);
	const [bad, setBad] = React.useState(0);
	const onGoodClick = (e) => {
		setGood((s) => {
			return s + 1;
		});
	};
	const onNeutralClick = (e) => {
		setNeutral((s) => {
			return s + 1;
		});
	};
	const onBadClick = (e) => {
		setBad((s) => {
			return s + 1;
		});
	};
	const onButtonClick = (e) => {
		switch (e.target.textContent) {
			case "Good":
				onGoodClick();
				break;
			case "Neutral":
				onNeutralClick();
				break;
			case "Bad":
				onBadClick();
				break;
			default:
				break;
		}
	};
	const onCountTotalFeedback = (good, neutral, bad) => {
		return good + neutral + bad;
	};
	const countPositiveFeedbackPercentage = (good, neutral, bad) => {
		return Math.round((good * 100) / (good + neutral + bad));
	};
	return (
		<div>
			<Section title="Please leave feedback">
				<FeedbackOptions onClick={onButtonClick} />
			</Section>
			<Section title="Statistics">
				{onCountTotalFeedback(good, neutral, bad) ? (
					<Statistics
						good={good}
						bad={bad}
						neutral={neutral}
						total={onCountTotalFeedback(good, neutral, bad)}
						positiveFeedback={countPositiveFeedbackPercentage(
							good,
							neutral,
							bad
						)}
					/>
				) : (
					<Notification message="There is no feedback" />
				)}
			</Section>
		</div>
	);
};

export default App;
