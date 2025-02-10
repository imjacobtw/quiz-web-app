import { useState } from "react";
import PropTypes from "prop-types";
import Page from "./Page";
import AnswerButton from "./AnswerButton";
import { Parser } from "html-to-react";

export default function QuestionPage({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionAnswers = [
    currentQuestion.correctAnswer,
    ...currentQuestion.incorrectAnswers,
  ];
  shuffle(currentQuestionAnswers);

  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  function handlePreviousQuestionButtonClick() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  function handleNextQuestionButtonClick() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  return (
    <Page>
      <div className="w-full md:w-3/4 2xl:w-3/5 min-h-full flex pt-16 items-center justify-start absolute top-0 flex-col">
        <h1 className="lg:text-[4rem] font-black text-red-orange text-[2rem] w-full lg:w-3/4">
          Question #{currentQuestionIndex + 1}{" "}
          <span className="text-gray-400/90">(of {questions.length})</span>
        </h1>
        <h1 className="lg:text-[2.5rem] font-bold text-[1.25rem] w-full lg:w-3/4 my-14">
          {Parser().parse(currentQuestion.text)}
        </h1>
        {currentQuestionAnswers.map((answer, index) => {
          return <AnswerButton key={index}>{Parser().parse(answer)}</AnswerButton>;
        })}
        <div className="w-3/4 flex justify-between">
          <button
            className="bg-red-orange text-white py-3 px-5 rounded-full cursor-pointer mb-5 hover:bg-red-orange/60 transition duration-300 ease-in-out"
            onClick={handlePreviousQuestionButtonClick}
          >
            Previous Question
          </button>
          <button
            className="bg-red-orange text-white py-3 px-5 rounded-full cursor-pointer mb-5 hover:bg-red-orange/60 transition duration-300 ease-in-out"
            onClick={handleNextQuestionButtonClick}
          >
            Next Question
          </button>
        </div>
      </div>
    </Page>
  );
}

QuestionPage.propTypes = {
  questions: PropTypes.array,
};
