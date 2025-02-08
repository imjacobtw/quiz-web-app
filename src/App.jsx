import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import TriviaGenerationPage from "./components/TriviaGenerationPage";
import QuestionPage from "./components/QuestionPage";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TriviaGenerationPage />} />
        <Route path="/trivia" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
