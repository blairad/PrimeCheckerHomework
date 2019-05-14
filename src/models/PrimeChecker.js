const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function() {

};

PrimeChecker.prototype.bindEvents = function () {
    PubSub.subscribe('FormView:num-submitted', (event) => {
        const inputtedNum = event.detail;
        const result = this.numberIsPrime(inputtedNum);
        PubSub.publish('PrimeChecker:result-calculated', result);
    });
}


PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};



module.exports = PrimeChecker;

// WordCounter.prototype.bindEvents = function () {
//     PubSub.subscribe('FormView:text-submitted', (event) => {
//       const inputtedText = event.detail;
//       const result = this.countWords(inputtedText);
//       PubSub.publish('WordCounter:result-calculated', result);
//     });
//   };
  
//   WordCounter.prototype.countWords = function (text) {
//     const words = text.split(' ');
//     return words.length;
//   };
  
//   module.exports = WordCounter;