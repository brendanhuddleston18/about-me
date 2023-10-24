"use strict";

// Welcome Message w/ prompt
let userName = prompt('Hey what is your name?');
console.log(userName);
alert(`Welcome ${userName}, to my work in progress 'About Me' site!`);

//Question 1 (If condition)
let userAccept = prompt('We are gonna take a quick quiz is that okay? (Y/N)');

if (userAccept.toLowerCase() === 'y') {
  console.log('Strap in here we go!');
  alert('Strap in here we go!');
} else {
  while (userAccept.toLowerCase() !== 'y') {
    userAccept = prompt(
      'You gotta agree to the test in order to view my site! So (Y/N)'
    );
  }
}

// Question 2 (Switch)
let brendanState = prompt('I am from Pennsylvania(Y/N)');
switch (brendanState.toLowerCase()) {
case 'y':
  // console.log('Nope, not from PA');
  alert('Nope, not from PA');
  break;
case 'n':
  // console.log('You are correct!');
  alert('You are correct!');
  break;
default:
  alert(
    "That's not even a choice, why would you choose that? Learn to follow directions."
  );
  break;
}

// Question 3 (If)
let brendanHome = prompt('Do I live in Fort Worth Texas currently? (Y/N)');

if (brendanHome.toLowerCase() === 'y') {
  // console.log('Ding ding ding! you're on a roll!');
  alert("Ding ding ding! you're on a roll!");
} else {
  // console.log('You are wrong!);
  alert('You are wrong!');
}

// Question 4 (Switch)
let brendanHobby = prompt('Working out in the gym is one of my hobbies? (Y/N)');

switch (brendanHobby.toLowerCase()) {
case 'y':
  // console.log('Yep love getting swole');
  alert('Yep love getting swole!');
  break;
case 'n':
  // console.log("Well that's just not quite right there partner");
  alert("Well that's just not quite right there partner");
  break;
}

// Question 5 (If)
let brendanPSM = prompt('I am a certified Professional Scrum Master 1? (Y/N)');
if (brendanPSM.toLowerCase() === 'y') {
  // console.log(`Yep you got it thanks for taking my quiz ${userName}`);
  alert(`Yep you got it thanks for taking my quiz ${userName} here's my site`);
} else {
  // console.log('You got this one wrong');
  alert('You got this one wrong');
  alert('Anyway here is my site!');
}
