import TriviaApiParameter from "../models/TriviaApiParameter";
import TriviaApiArgument from "../models/TriviaApiParameter";

export const API_BASE_URL = "https://opentdb.com/api.php";
const API_CATEGORY_URL = "https://opentdb.com/api_category.php";

export const RESPONSE_CODE_MESSAGES = {
  0: "Returned results successfully.",
  1: "Could not return results. The API doesn't have enough questions for your query.",
  2: "Contains an invalid parameter. Arguements passed in aren't valid.",
  3: "Session Token does not exist.",
  4: "Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.",
  5: "Too many requests have occurred. Each IP can only access the API once every 5 seconds.",
}

export const amountParameter = new TriviaApiParameter("amount", [], {
  minimum: 1,
  maximum: 50,
  default: 10,
});

for (let i = amountParameter.minimum; i <= amountParameter.maximum; i++) {
  const newArgument = new TriviaApiArgument(String(i), i);
  amountParameter.args.push(newArgument);
}

export const categoryParameter = new TriviaApiParameter("category", []);

fetch(API_CATEGORY_URL) 
  .then((res) => res.json())
  .then((resJson) => {
    categoryParameter.args.push(new TriviaApiArgument("Any Category", undefined));

    for (const category of resJson.trivia_categories) {
      const newArgument = new TriviaApiArgument(category.name, category.id);
      categoryParameter.args.push(newArgument);
    }
  })
  .catch((err) => console.error(err));

export const difficultyParameter = new TriviaApiParameter("difficulty", [
  new TriviaApiArgument("Any Difficulty", undefined),
  new TriviaApiArgument("Easy", "easy"),
  new TriviaApiArgument("Medium", "medium"),
  new TriviaApiArgument("Hard", "hard"),
]);

export const typeParameter = new TriviaApiParameter("type", [
  new TriviaApiArgument("Any Type", undefined),
  new TriviaApiArgument("Multiple Choice", "multiple"),
  new TriviaApiArgument("True / False", "boolean"),
]);
