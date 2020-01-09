'use strict';

var username = prompt('Welcome! What is your name?');
alert('Hi, ' + username + ', are you ready to take the BrodyQuiz?');

var strQ = ['Is Brody over 25 years old?', 'Did Brody previously work as a developer?', 'Was Brody born in Washington?', 'Did Brody attend a CODE 102 course?', 'Is Brody enjoying CODE 201 so far?'];
var strA = ['no', 'no', 'yes', 'yes', 'yes'];
var input = '';
var i = 0;
var correct = 0;

while(i < strQ.length) {
  input = prompt(strQ[i]);
  if (input.toLowerCase() === strA[i]) {
    alert('Correct!');
    correct++;
  } else {
    alert('Incorrect');
  }
  i++;
}

var numA = 24;

var g = 0;
var maxG = 4;

input = Number(prompt('How old is Brody?' + ' You have ' + (maxG - g) + ' guesses left.'));
if(input === numA) {
  correct++;
  g++;
  alert('Correct! It took you ' + g + ' guesses.');
} else {
  while(input !== numA) {
    while(g < maxG) {
      if(input === numA) {
        correct++;
        g++;
        alert('Correct! It took you ' + g + ' guesses.');
        break;
      } else if(input < numA) {
        g++;
        input = Number(prompt('Answer too low, try again. You have ' + (maxG - g) + ' guesses left.'));
      } else if(input > numA) {
        g++;
        input = Number(prompt('Answer too high, try again. You have ' + (maxG - g) + ' guesses left.'));
      } else {
        g++;
        input = Number(prompt('Incorrect, try again. You have ' + (maxG - g) + ' guesses left.'));
      }
    }
    break;
  }
}

var movieA = ['mon oncle', 'metropolis', '2001: a space odyssey', 'the empire strikes back', 'mulholland dr.', 'the thing', 'the sevent seal', 'flash gordon', 'true stories', 'good time'];

g = 0;
maxG = 6;

input = prompt('What is one of Brody\'s 10 favorite movies?').toLowerCase();
if(movieA.includes(input) === true) {
  correct++;
  g++;
  alert('Correct! It took you ' + g + ' guesses.');
} else {
  while(movieA.includes(input) === false) {
    while(g < maxG) {
      if(movieA.includes(input) === true) {
        correct++;
        g++;
        alert('Correct! It took you ' + g + ' guesses.');
        break;
      } else {
        g++;
        input = prompt('Incorrect, try again. You have ' + (maxG - g) + ' guesses left.');
      }
    }
    break;
  }
}

alert('You scored ' + correct + '/7 on the BrodyQuiz.'); //how to not hard code 7?
