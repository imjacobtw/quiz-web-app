import TriviaApiParameter from "../models/TriviaApiParameter";
import TriviaApiArgument from "../models/TriviaApiArgument";

export const API_BASE_URL = "https://opentdb.com/api.php";

export const RESPONSE_CODE_MESSAGES = {
  0: "Returned results successfully.",
  1: "Could not return results. The API doesn't have enough questions for your query.",
  2: "Contains an invalid parameter. Arguments passed in aren't valid.",
  3: "Session Token does not exist.",
  4: "Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.",
  5: "Too many requests have occurred. Each IP can only access the API once every 5 seconds.",
};

export const amountParameter = new TriviaApiParameter("amount", [], {
  minimum: 1,
  maximum: 50,
  default: 10,
});

for (let i = amountParameter.minimum; i <= amountParameter.maximum; i++) {
  const newArgument = new TriviaApiArgument(String(i), i);
  amountParameter.args.push(newArgument);
}

export const categoryParameter = new TriviaApiParameter("category", [
  {
    text: "Any Category",
    value: "",
  },
  {
    text: "General Knowledge",
    value: 9,
  },
  {
    text: "Entertainment: Books",
    value: 10,
  },
  {
    text: "Entertainment: Film",
    value: 11,
  },
  {
    text: "Entertainment: Music",
    value: 12,
  },
  {
    text: "Entertainment: Musicals & Theatres",
    value: 13,
  },
  {
    text: "Entertainment: Television",
    value: 14,
  },
  {
    text: "Entertainment: Video Games",
    value: 15,
  },
  {
    text: "Entertainment: Board Games",
    value: 16,
  },
  {
    text: "Science & Nature",
    value: 17,
  },
  {
    text: "Science: Computers",
    value: 18,
  },
  {
    text: "Science: Mathematics",
    value: 19,
  },
  {
    text: "Mythology",
    value: 20,
  },
  {
    text: "Sports",
    value: 21,
  },
  {
    text: "Geography",
    value: 22,
  },
  {
    text: "History",
    value: 23,
  },
  {
    text: "Politics",
    value: 24,
  },
  {
    text: "Art",
    value: 25,
  },
  {
    text: "Celebrities",
    value: 26,
  },
  {
    text: "Animals",
    value: 27,
  },
  {
    text: "Vehicles",
    value: 28,
  },
  {
    text: "Entertainment: Comics",
    value: 29,
  },
  {
    text: "Science: Gadgets",
    value: 30,
  },
  {
    text: "Entertainment: Japanese Anime & Manga",
    value: 31,
  },
  {
    text: "Entertainment: Cartoon & Animations",
    value: 32,
  },
]);

// const API_CATEGORY_URL = "https://opentdb.com/api_category.php";

// fetch(API_CATEGORY_URL)
//   .then((res) => res.json())
//   .then((resJson) => {
//     categoryParameter.args.push(new TriviaApiArgument("Any Category", undefined));

//     for (const category of resJson.trivia_categories) {
//       const newArgument = new TriviaApiArgument(category.name, category.id);
//       categoryParameter.args.push(newArgument);
//     }
//   })
//   .catch((err) => console.error(err));

export const difficultyParameter = new TriviaApiParameter("difficulty", [
  new TriviaApiArgument("Any Difficulty", ""),
  new TriviaApiArgument("Easy", "easy"),
  new TriviaApiArgument("Medium", "medium"),
  new TriviaApiArgument("Hard", "hard"),
]);

export const typeParameter = new TriviaApiParameter("type", [
  new TriviaApiArgument("Any Type", ""),
  new TriviaApiArgument("Multiple Choice", "multiple"),
  new TriviaApiArgument("True / False", "boolean"),
]);
