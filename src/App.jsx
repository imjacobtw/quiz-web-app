import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import TriviaGenerationPage from "./components/TriviaGenerationPage";
import QuestionPage from "./components/QuestionPage";

export default function App() {
  const [questions, setQuestions] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<TriviaGenerationPage setQuestions={setQuestions} />} />
        <Route path="/trivia" element={<QuestionPage questions={questions} />} />
      </Routes>
    </BrowserRouter>
  );
}
