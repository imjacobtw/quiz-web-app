import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import TriviaGenerationSection from "./components/TriviaGenerationSection";
import QuestionSection from "./components/QuestionSection";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<TriviaGenerationSection />} />
          <Route path="/question/:id" element={<QuestionSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
