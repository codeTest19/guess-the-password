class RightAnswerResponse {
  constructor(obj) {
    this.correct = obj.correct;
    this.hint = obj.hint;
    this.answer = obj.answer;
  }
}

module.exports = RightAnswerResponse;
