import React, { useEffect, useState } from 'react'
import './Quiz.css';
import { questions } from './quistions';

export default function Quiz() {
	const questions1 = questions;

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions1.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
                <div className="quizagian">
				<div className='score-section'>
					You scored {score} out of {questions1.length}
				</div>
                    <a href="http://localhost:3000/">Click Here To give Quiz Agian</a>
                    </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions1.length}
						</div>
						<div className='question-text'>{questions1[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions1[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
