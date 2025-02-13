import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Page from "./Page";
import AnswerButton from "./AnswerButton";
import { Parser } from "html-to-react";
import shuffle from "../util/shuffle";

export default function QuestionPage({ question, currentQuestionIndex, setCurrentQuestionIndex, setScore }) {
  const [isRevealingCorrectAnswer, setIsRevealingCorrectAnswer] = useState(false);

  const questionAnswers = useMemo(() => {
    const answers = [question.correctAnswer, ...question.incorrectAnswers];
    shuffle(answers);
    return answers;
  }, [question.correctAnswer, question.incorrectAnswers]);

  function handleAnswerButtonClick(isCorrectAnswer) {
    if (!isRevealingCorrectAnswer) {
      setIsRevealingCorrectAnswer((prev) => !prev);

      if (isCorrectAnswer) {
        setScore((prev) => prev + 1);
      }

      setTimeout(() => {
        setIsRevealingCorrectAnswer(false);
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 3000);
    }
  }

  return (
    <Page>
      <div className="w-full md:w-3/4 2xl:w-3/5 min-h-full flex pt-16 items-center justify-start absolute top-0 flex-col">
        <h1 className="lg:text-[4rem] font-black text-red-orange text-[2rem] w-full lg:w-3/4">
          Question #{currentQuestionIndex + 1}
        </h1>
        <h1 className="lg:text-[2.5rem] font-bold text-[1.25rem] w-full lg:w-3/4 my-14">
          {Parser().parse(question.text)}
        </h1>
        {questionAnswers.map((answer, index) => {
          return (
            <AnswerButton
              key={index}
              isRevealed={isRevealingCorrectAnswer}
              isCorrectAnswer={answer === question.correctAnswer}
              onClick={() =>
                handleAnswerButtonClick(
                  answer === question.correctAnswer
                )
              }
            >
              {Parser().parse(answer)}
            </AnswerButton>
          );
        })}
      </div>
    </Page>
  );
}

QuestionPage.propTypes = {
  question: PropTypes.object.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  setCurrentQuestionIndex: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired
};
