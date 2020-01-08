'use strict';

var correct = 0;
var incorrect = 0;

var username = prompt('Welcome! What is your name?');
alert('Hi, ' + username + ', are you ready to take the BrodyQuiz?');

var nameAnswer = prompt('Did Brody attend a CODE 102 course?');
if(nameAnswer.toLowerCase() === 'yes' || nameAnswer.toLowerCase() === 'y') {
  alert('Correct!');
  //console.log('Correct!');
  correct++;
} else {
  alert('Incorrenct');
  //console.log('Incorrect');
  incorrect++;
}

var ageAnswer = prompt('Is Brody over 25 years old?')
if(ageAnswer.toLowerCase() === 'no' || nameAnswer.toLowerCase() === 'n') {
  alert('Correct!');
  //console.log('Correct!');
  correct++;
} else {
  alert('Incorrect');
  //console.log('Incorrect');
  incorrect++;
}

var catsAnswer = prompt('Does Brody have any cats?');
if(catsAnswer.toLowerCase() === 'no' || catsAnswer.toLowerCase() === 'n') {
  alert('Correct!');
  //console.log('Correct!');
  correct++;
} else {
  alert('Incorrect');
  //console.log('Incorrect');
  incorrect++;
}

var stateAnswer = prompt('Was Brody born in Washington?');
if(stateAnswer.toLowerCase() === 'yes' || stateAnswer.toLowerCase() === 'y') {
  alert('Correct!');
  //console.log('Correct!');
  correct++;
} else {
  alert('Incorrect');
  //console.log('Incorrect');
  incorrect++;
}

var funAnswer = prompt('Is Brody enjoying CODE 201 so far?');
if(funAnswer.toLowerCase() === 'yes' || funAnswer.toLowerCase() === 'y') {
  alert('Correct!');
  //console.log('Correct!');
  correct++;
} else {
  alert('Incorrect');
  //console.log('Incorrect');
  incorrect++;
}

var questions = correct + incorrect;
alert('Thanks for taking the BrodyQuiz, ' + name + '. You scored a ' + correct + '/' + questions + '!');
