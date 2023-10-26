"use strict";

// Welcome Message w/ prompt
let userName = prompt('Hey what is your name?');
console.log(userName);
alert(`Welcome ${userName}, to my work in progress 'About Me' site!`);

let correct = 0;
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

// let questionOne;
// let questionTwo;
// let questionThree;
// let questionFour;
// let questionFive;
// let questionSix;
// let questionSeven;
// let userQuiz = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven];
//Question 1 (If condition)

function questionOne (){
  let userAccept = prompt('We are gonna take a quick quiz is that okay? (Y/N)');
  let letter = userAccept.substring(0, 1).toLowerCase();
  console.log(letter);
  if (letter === 'y') {
    console.log('Strap in here we go!');
    alert('Strap in here we go!');
    correct++;
    console.log(correct);
  } else {
  // console.log('Placeholder because my while loop will not work in lighthouse');
    while (userAccept.toLowerCase() !== 'y') {
      userAccept = prompt(
        'You gotta agree to the test in order to view my site! So (Y/N)'
      );}
  }
}


// Question 2 (Switch)
function questionTwo(){
  let brendanState = prompt('I am from Pennsylvania(Y/N)');
  switch (brendanState.toLowerCase()) {
  case 'y':
  // console.log('Nope, not from PA');
    alert('Nope, not from PA');
    break;
  case 'n':
  // console.log('You are correct!');
    alert('You are correct!');
    correct++;
    console.log(correct);
    break;
  default:
    alert('That is not even a choice, why would you choose that? Learn to follow directions.'
    );
    break;
  }
}

// Question 3 (If)
function questionThree (){

  let brendanHome = prompt('Do I live in Fort Worth Texas currently? (Y/N)');

  if (brendanHome.toLowerCase() === 'y') {
    // console.log('Ding ding ding! you're on a roll!');
    alert("Ding ding ding! you're on a roll!");
    correct++;
    console.log(correct);
  } else {
    // console.log('You are wrong!);
    alert('You are wrong!');
  }
}

// Question 4 (Switch)
function questionFour (){
  let brendanHobby = prompt('Working out in the gym is one of my hobbies? (Y/N)');

  switch (brendanHobby.toLowerCase()) {
  case 'y':
  // console.log('Yep love getting swole');
    alert('Yep love getting swole!');
    correct++;
    console.log(correct);
    break;
  case 'n':
  // console.log("Well that's just not quite right there partner");
    alert("Well that's just not quite right there partner");
    break;
  }
}

// Question 5 (If)
function questionFive (){
  let brendanPSM = prompt('I am a certified Professional Scrum Master 1? (Y/N)');
  if (brendanPSM.toLowerCase() === 'y') {
  // console.log(`Yep you got it thanks for taking my quiz ${userName}`);
    alert(`Yep you got it ${userName}`);
    correct++;
    console.log(correct);
  } else {
  // console.log('You got this one wrong');
    alert('You got this one wrong');
  }
}

// Question 6 (Only four chances)
// Shoutout to Ekow for helping me out with setting up the limit alert
function questionSix (){
  let userGuessAge = Number(prompt('How old am I?'));
  let n = 1;
  for(let userChance = 1; userChance < 5; userChance++){
    if(n >= 4){
      alert('The answer was 25');
      break;
    }
    console.log(n);
    if(Number(userGuessAge) === 25){
      alert(`Good Job ${userName}`);
      correct++;
      console.log(correct);
      break;
    } else if(userGuessAge > 25){
      userGuessAge = prompt(`Nope you're too high try again, you're on your ${userChance} attempt`);
    } else if(userGuessAge < 25){
      userGuessAge = prompt(`Nope you're too low try again, you're on your ${userChance} attempt`);
    } else {
      userGuessAge = prompt(`Nope, that's not even a number, you're on your ${userChance} attempt`);
    }
    n++;
  }
}

// Question 7 Array
function questionSeven (){
  let statesLived = prompt('Which of these states have I lived in?: Colorado, Tennessee, Alabama, Texas, California');
  let correctStates = ['colorado','texas'];
  let limit = 1;
  while(statesLived.toLowerCase() !== correctStates[0] || statesLived.toLowerCase() !== correctStates[1]){
    if(statesLived.toLowerCase() == correctStates[0]){
      alert('You got it, the other answer was Texas!');
  correct++;
      console.log(correct);
      break;
    } else if (statesLived.toLowerCase() == correctStates[1]){
      alert('You got it, the other answer was Colorado!');
  correct++;
      console.log(correct);
      break;
    }
    statesLived = prompt(`Sorry, that is incorrect try again: Colorado, Tennessee, Alabama, Texas, California, you are on attempt ${limit}/6`);
    if(limit >= 6){
      alert('The two correct answers were Texas or Colorado!');
      break;
    }
    limit++;
  }
}

alert(`Thanks for taking my quiz! you got a ${correct}/7!`);







