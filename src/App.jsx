import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import TriviaGenerationPage from "./components/TriviaGenerationPage";
import QuestionPage from "./components/QuestionPage";
import GameOverPage from "./components/GameOverPage";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  function resetGame() {
    setCurrentQuestionIndex(0);
    setScore(0);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <TriviaGenerationPage
              setQuestions={setQuestions}
              resetGame={resetGame}
            />
          }
        />
        <Route
          path="/trivia"
          element={
            currentQuestionIndex === questions.length ? (
              <GameOverPage
                score={score}
                numberOfQuestions={questions.length}
                resetGame={resetGame}
              />
            ) : (
              <QuestionPage
                question={questions[currentQuestionIndex]}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                setScore={setScore}
              />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
