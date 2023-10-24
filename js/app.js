let userName = prompt("Hey what's your name?");
console.log(userName);
alert(`Welcome ${userName}, to my work in progress 'About Me' site!`);

let userAccept = prompt("We're gonna take a quick quiz is that okay? (Y/N)");

if (userAccept.toLowerCase() === "y") {
  console.log("Strap in here we go!");
  alert("Strap in here we go!");
} else {
  while (userAccept.toLowerCase() !== "y") {
    userAccept = prompt(
      "You gotta agree to the test in order to view my site! So (Y/N)"
    );
  }
}

let brendanAge = prompt("How old am I?");

switch (brendanAge) {
  case 25:
    alert("You got it!");
    break;
  case 24:
    alert("Almost had it!");
    break;
  case 25:
    alert("Ooooo you were close!");
    break;
  default:
    alert("Nope you are wrong");
}
