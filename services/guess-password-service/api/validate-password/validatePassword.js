const { inMemoryStore } = require("../../utils/in-memory-store");
const resourceStrings = require("../../core/resourceStrings");
const RequestParams = require("./request/requestParams");
const RightAnswerResponse = require("./response/rightAnswer");
const WrongAnswerResponse = require("./response/wrongAnswer");

function findCharacterMatches(str) {
  const inMemoryData = inMemoryStore.retrieve();
  const { password } = inMemoryData;

  const re = new RegExp(`[${str}]`, "gi");
  const matchedCharacters = password.match(re);
  if (matchedCharacters) return matchedCharacters;

  return [];
}

async function validatePassword(req, res) {
  try {
    const params = new RequestParams(req.body);

    const inMemoryData = inMemoryStore.retrieve();

    if (!inMemoryData || Object.keys(inMemoryData).length === 0) {
      return res.status(404).send(resourceStrings.NO_DATA_FOUND);
    }

    if (inMemoryData.hint !== params.hint) {
      return res.status(404).send(resourceStrings.NO_HINT_FOUND);
    }

    if (inMemoryData.password === params.answer) {
      const response = new RightAnswerResponse({
        correct: true,
        hint: params.hint,
        answer: params.answer
      });

      return res.json(response);
    }

    if (inMemoryData.password !== params.answer) {
      const highlightableCharacters = findCharacterMatches(params.answer);

      const response = new WrongAnswerResponse({
        correct: false,
        highlight: highlightableCharacters,
        hint: params.hint,
        answer: params.answer
      });

      return res.json(response);
    }

    return res.json({});
  } catch (err) {
    return res.status(500).send("server error");
  }
}

module.exports = validatePassword;
