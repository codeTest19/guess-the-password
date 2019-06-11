class WrongAnswerResponse {
  constructor(obj) {
    this.correct = obj.correct;
    this.highlight = obj.highlight;
    this.hint = obj.hint;
    this.answer = obj.answer;
  }
}

module.exports = WrongAnswerResponse;
