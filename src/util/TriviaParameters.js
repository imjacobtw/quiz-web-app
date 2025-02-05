class TriviaArgument {
  constructor(text, queryParameterValue) {
    this.text = text;
    this.queryParameterValue = queryParameterValue;
  }
}

export const triviaQueryParameters = {
  NUMBER_OF_QUESTIONS: "amount",
  CATEGORY: "category",
  DIFFICULTY: "difficulty",
  TYPE: "type",
};

export const triviaAmounts = {
  minimum: 1,
  maximum: 50,
};

export const triviaCategories = [
  {
    text: "General Knowledge",
    queryParameterValue: 9,
  },
  {
    text: "Entertainment: Books",
    queryParameterValue: 10,
  },
  {
    text: "Entertainment: Film",
    queryParameterValue: 11,
  },
  {
    text: "Entertainment: Music",
    queryParameterValue: 12,
  },
  {
    text: "Entertainment: Musicals & Theatres",
    queryParameterValue: 13,
  },
  {
    text: "Entertainment: Television",
    queryParameterValue: 14,
  },
  {
    text: "Entertainment: Video Games",
    queryParameterValue: 15,
  },
  {
    text: "Entertainment: Board Games",
    queryParameterValue: 16,
  },
  {
    text: "Science & Nature",
    queryParameterValue: 17,
  },
  {
    text: "Science: Computers",
    queryParameterValue: 18,
  },
  {
    text: "Science: Mathematics",
    queryParameterValue: 19,
  },
  {
    text: "Mythology",
    queryParameterValue: 20,
  },
  {
    text: "Sports",
    queryParameterValue: 21,
  },
  {
    text: "Geography",
    queryParameterValue: 22,
  },
  {
    text: "History",
    queryParameterValue: 23,
  },
  {
    text: "Politics",
    queryParameterValue: 24,
  },
  {
    text: "Art",
    queryParameterValue: 25,
  },
  {
    text: "Celebrities",
    queryParameterValue: 26,
  },
  {
    text: "Animals",
    queryParameterValue: 27,
  },
  {
    text: "Vehicles",
    queryParameterValue: 28,
  },
  {
    text: "Entertainment: Comics",
    queryParameterValue: 29,
  },
  {
    text: "Science: Gadgets",
    queryParameterValue: 30,
  },
  {
    text: "Entertainment: Japanese Anime & Manga",
    queryParameterValue: 31,
  },
  {
    text: "Entertainment: Cartoon & Animations",
    queryParameterValue: 32,
  },
];

// fetch("https://opentdb.com/api_category.php")
//   .then((res) => res.json())
//   .then((data) => {
//     for (const category of data.trivia_categories) {
//       const newTriviaCategory = new TriviaArgument(category.name, category.id);
//       triviaCategories.push(newTriviaCategory);
//     }
//   })
//   .catch((err) => console.error(err));

export const triviaDifficulties = [
  new TriviaArgument("Easy", "easy"),
  new TriviaArgument("Medium", "medium"),
  new TriviaArgument("Hard", "hard"),
];

export const triviaTypes = [
  new TriviaArgument("Multiple Choice", "multiple"),
  new TriviaArgument("True/ False", "boolean"),
];
