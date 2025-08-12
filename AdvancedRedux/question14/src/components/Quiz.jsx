import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, updateScore } from "../redux/quizActions";
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, loading, score } = useSelector((state) => state.quiz);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) dispatch(updateScore(1));
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/result");
    }
  };

  if (loading) return <h2>Loading quiz...</h2>;
  if (!questions.length) return <p>No questions found</p>;

  const question = questions[currentIndex];

  return (
    <div>
      <h2>Question {currentIndex + 1} of {questions.length}</h2>
      <p>{question.question}</p>
      {question.options.map((opt, idx) => (
        <button key={idx} onClick={() => handleAnswer(opt === question.correct_option)}>{opt}</button>
      ))}
    </div>
  );
};
