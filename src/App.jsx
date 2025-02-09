import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import TriviaGenerationPage from "./components/TriviaGenerationPage";
import QuestionPage from "./components/QuestionPage";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  console.log(questions);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TriviaGenerationPage setQuestions={setQuestions} />} />
        <Route path="/trivia" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
