import PropTypes from "prop-types";
import Page from "./Page";
import ReturnToTriviaGenerationPageButton from "./ReturnToTriviaGenerationPageButton";

export default function GameOverPage({ score, numberOfQuestions, resetGame }) {
  const YELLOW_SCORE_TEXT_COLOR_MIN = Math.floor(numberOfQuestions / 3);
  const GREEN_SCORE_TEXT_COLOR_MIN = Math.floor(numberOfQuestions / 3) * 2;

  let scoreColor = "text-white";

  if (score < YELLOW_SCORE_TEXT_COLOR_MIN) {
    scoreColor = "text-red-500";
  } else if (score < GREEN_SCORE_TEXT_COLOR_MIN) {
    scoreColor = "text-yellow-500";
  } else {
    scoreColor = "text-green-500";
  }

  return (
    <Page>
      <h1 className="lg:text-[4rem] font-black text-white text-[2rem] w-full lg:w-3/4 mb-8">
        Your Score:{" "}
        <span className={scoreColor}>
          {score}/{numberOfQuestions}
        </span>
      </h1>
      <ReturnToTriviaGenerationPageButton onClick={resetGame}>
        Play Again
      </ReturnToTriviaGenerationPageButton>
    </Page>
  );
}

GameOverPage.propTypes = {
  score: PropTypes.number.isRequired,
  numberOfQuestions: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
};
