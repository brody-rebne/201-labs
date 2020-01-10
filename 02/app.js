'use strict';

var username = prompt('Welcome! What is your name?');
alert('Hi, ' + username + ', are you ready to take the BrodyQuiz?');
var strQ = ['Is Brody over 25 years old?', 'Did Brody previously work as a developer?', 'Was Brody born in Washington?', 'Did Brody attend a CODE 102 course?', 'Is Brody enjoying CODE 201 so far?'];
var strA = ['no', 'no', 'yes', 'yes', 'yes'];
var input = '';
var i = 0;
var correct = 0;
var g = 0;
var q = 0;

function askYesNo(questionNo) {
  while (i < strQ.length) {
    input = prompt(strQ[i]);
    if (input.toLowerCase() === strA[i]) {
      alert('Correct!');
      correct++;
    } else {
      alert('Incorrect');
    }
    q++;
    i++;
  }
}

function askNumber(maxG) {
  var numA = 24;
  input = Number(prompt('How old is Brody?' + ' You have ' + (maxG - g) + ' guesses left.'));
  g++;
  while(g < maxG) {
    if (input === numA) {
      correct++;
      alert('Correct! It took you ' + g + ' guesses.');
      break;
    } else {
      if (input < numA) {
        input = Number(prompt('Answer too low, try again. You have ' + (maxG - g) + ' guesses left.'));
        g++
      } else if (input > numA) {
        input = Number(prompt('Answer too high, try again. You have ' + (maxG - g) + ' guesses left.'));
        g++;
      } else {
        input = Number(prompt('Incorrect, try again. You have ' + (maxG - g) + ' guesses left.'));
        g++;
      }
    }
  }
  q++;
}

function askMulti(maxG){
  var movieA = ['mon oncle', 'metropolis', '2001: a space odyssey', 'the empire strikes back', 'mulholland dr.', 'the thing', 'the sevent seal', 'flash gordon', 'true stories', 'good time'];
  g = 0;
  input = prompt('What is one of Brody\'s 10 favorite movies?').toLowerCase();
  g++;
  while (g < maxG) {
    if (movieA.includes(input) === true) {
      correct++;
      alert('Correct! It took you ' + g + ' guesses.');
      break;
    } else {
      input = prompt('Incorrect, try again. You have ' + (maxG - g) + ' guesses left.');
      g++;
    }
  }
  q++;
}

for (i = 0; i < strQ.length; i++) {
 askYesNo(i);
}

for (i = 0; i < 1; i++) {
  askNumber(4);
}

for (i = 0; i < 1; i++) {
  askMulti(6);
}

alert('You scored ' + correct + '/' + q + ' on the BrodyQuiz.');
