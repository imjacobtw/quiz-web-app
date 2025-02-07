export default class TriviaQuestion {
  constructor(
    category,
    correctAnswer,
    difficulty,
    incorrectAnswers,
    text,
    type
  ) {
    this.category = category;
    this.correctAnswer = correctAnswer;
    this.difficulty = difficulty;
    this.incorrectAnswers = incorrectAnswers;
    this.text = text;
    this.type = type;
  }
}
