export default class TriviaApiParameter {
  constructor(name, args, options) {
    this.name = name;
    this.args = args;

    for (const key in options) {
      this[key] = options[key];
    }
  }
}
