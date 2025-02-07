import { useState } from "react";
import TriviaQuestion from "./models/TriviaQuestion";
import Footer from "./components/Footer";
import { API_BASE_URL, RESPONSE_CODE_MESSAGES, amountParameter } from "./util/TriviaApiUtil";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [questionsError, setQuestionsError] = useState(null);

  const [amount, setAmount] = useState(amountParameter.default);

  async function handleGenerateTriviaButtonClick() {
    setIsLoadingQuestions(true);

    try {
      const url = new URL(API_BASE_URL);
      url.searchParams.append("amount", amount);

      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.response_code !== 0) {
        const errMessage = RESPONSE_CODE_MESSAGES[responseJson.response_code];
        throw new Error(errMessage);
      }

      const fetchedQuestions = [];

      for (const questionJson of responseJson.results) {
        const newQuestion = new TriviaQuestion(
          questionJson.category,
          questionJson.correct_answer,
          questionJson.difficulty,
          questionJson.incorrect_answers,
          questionJson.question,
          questionJson.type
        );
        fetchedQuestions.push(newQuestion);
      }

      setQuestions(fetchedQuestions);
    } catch (err) {
      console.error(err.message);
      setQuestionsError(err);
    } finally {
      setIsLoadingQuestions(false);
    }
  }

  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-navy-blue relative font-medium text-white">
      <h1 className="text-[5rem] font-black">
        Welcome to My <span className="text-red-orange">Trivia</span> App!
      </h1>
      <p className="text-2xl font-medium my-4 text-gray-400/90">
        Please select the parameters you want for your customized trivia below:
      </p>
      <div className="min-w-1/2">
        <label className="text-2xl">Number of Questions: </label>
        <input
          type="number"
          className="bg-white rounded-sm text-navy-blue"
          max={amountParameter.maximum}
          min={amountParameter.minimum}
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
        />
        <button
          className="bg-blue-500 hover:bg-blue-800 rounded-full p-5"
          onClick={handleGenerateTriviaButtonClick}
        >
          Generate Trivia
        </button>
      </div>
      <Footer />
    </div>
  );
}
