const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeNumbers = event.detail;
    this.displayResult(primeNumbers);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `Prime Numbers: ${result}`;
};

module.exports = ResultView;