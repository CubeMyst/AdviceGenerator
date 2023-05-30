import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import patternDividerDesktop from '../assets/pattern-divider-desktop.svg';
import patternDividerMobile from '../assets/pattern-divider-mobile.svg';
import diceIcon from '../assets/icon-dice.svg';

const Card = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	const [adviceID, setAdviceID] = useState(117);
	const [advice, setAdvice] = useState('');
	const [rotate, setRotate] = useState(false);

	/**
	 * This is an asynchronous function that fetches advice from an API using a provided advice ID and
	 * sets the advice and advice ID in the state if the response is successful.
	 */
	const getAdvice = async (adviceID) => {
		try {
			const res = await fetch(`https://api.adviceslip.com/advice/${adviceID}`);
			if (res.ok) {
				const data = await res.json();
				setAdviceID(data.slip.id);
				setAdvice(data.slip.advice);
			} else {
				throw new Error('Unable to fetch advice');
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getAdvice(adviceID);
	}, [adviceID]);

	/**
	 * This function handles a click event by calling a function to retrieve advice and setting a random
	 * advice ID.
	 */
	const handleAdviceClick = () => {
		getAdvice();
		setAdviceID(getRandomInt(1, 224));
		handleRotate();
	};

	const handleRotate = () => {
		setRotate(!rotate);
	};

	/**
	 * The function returns a random integer between a minimum and maximum value.
	 * @returns a random integer between the minimum (inclusive) and maximum (exclusive) values passed as
	 * arguments.
	 */
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}

	return (
		<div className="box">
			<h6 className="adviceID">Advice #{adviceID}</h6>
			<p className="advice">{`“${advice}”`}</p>
			<img
				src={isMobile ? patternDividerMobile : patternDividerDesktop}
				alt="Pattern Divider"
				className="patternDivider"
			/>
			<button
				className={`rotate${rotate ? 'B' : 'A'}`}
				onClick={handleAdviceClick}>
				<img
					src={diceIcon}
					alt="Dice Icon"
				/>
			</button>
		</div>
	);
};

export default Card;
