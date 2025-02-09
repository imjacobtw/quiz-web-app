import PropTypes from "prop-types";
import { useState } from "react";
import Page from "./Page";
import {
  amountParameter,
  categoryParameter,
  difficultyParameter,
  typeParameter,
  API_BASE_URL,
  RESPONSE_CODE_MESSAGES,
} from "../util/TriviaApiUtil";
import TriviaQuestion from "../models/TriviaQuestion";
import TriviaArgumentInputContainer from "./TriviaArgumentInputContainer";
import TriviaArgumentDropdown from "./TriviaArgumentDropdown";

export default function TriviaGenerationPage({ setQuestions }) {
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [questionsError, setQuestionsError] = useState(null);

  const [amount, setAmount] = useState(amountParameter.default);
  const [category, setCategory] = useState(categoryParameter.args[0].value);
  const [difficulty, setDifficulty] = useState(
    difficultyParameter.args[0].value
  );
  const [type, setType] = useState(typeParameter.args[0].value);

  async function handleGenerateTriviaButtonClick() {
    setIsLoadingQuestions(true);

    try {
      const url = new URL(API_BASE_URL);
      url.searchParams.append("amount", amount);
      url.searchParams.append("category", category);
      url.searchParams.append("difficulty", difficulty);
      url.searchParams.append("type", type);

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

  if (isLoadingQuestions) {
    return <Page><h1 className="text-4xl">Loading...</h1></Page>;
  }

  if (questionsError) {
    return <Page><h1 className="text-4xl">{questionsError.message}</h1></Page>;
  }

  return (
    <Page>
      <h1 className="lg:text-[5rem] font-black text-[3rem]">
        Welcome to My <span className="text-red-orange">Trivia</span> App!
      </h1>
      <p className="font-medium mt-4 mb-8 text-gray-400/90">
        Please select the parameters you want for your customized trivia below:
      </p>
      <div className="">
        <TriviaArgumentInputContainer label="Select Amount">
          <input
            type="number"
            className="bg-white text-red-orange focus:outline-red-orange rounded-full text-center p-2 min-w-[500px]"
            max={amountParameter.maximum}
            min={amountParameter.minimum}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </TriviaArgumentInputContainer>
        <TriviaArgumentInputContainer label="Select Category">
          <TriviaArgumentDropdown
            parameter={categoryParameter}
            argument={category}
            setArgument={setCategory}
          />
        </TriviaArgumentInputContainer>
        <TriviaArgumentInputContainer label="Select Difficulty">
          <TriviaArgumentDropdown
            parameter={difficultyParameter}
            argument={difficulty}
            setArgument={setDifficulty}
          />
        </TriviaArgumentInputContainer>
        <TriviaArgumentInputContainer label="Select Type">
          <TriviaArgumentDropdown
            parameter={typeParameter}
            argument={type}
            setArgument={setType}
          />
        </TriviaArgumentInputContainer>
      </div>
      <button
        className="bg-red-orange rounded-full px-5 py-3 uppercase cursor-pointer hover:bg-red-orange/60 transition duration-300 ease-in-out"
        onClick={handleGenerateTriviaButtonClick}
      >
        Generate Trivia
      </button>
    </Page>
  );
}

TriviaGenerationPage.propTypes = {
  setQuestions: PropTypes.func.isRequired,
};
