"use strict";

window.addEventListener("load", start);

let min = 0;
let max = 100;
let guessCount = 0;

let middle;

function start() {
  console.log("spillet er startet");

  document.querySelector("#start").addEventListener("click", startGame);
  document.querySelector("#low").addEventListener("click", guessTooLow);
  document.querySelector("#high").addEventListener("click", guessTooHigh);
  document.querySelector("#correct").addEventListener("click", correct);
  document.querySelector("#start").addEventListener("click", startGame);
}

function startGame() {
  if (document.querySelector("#guesses").innerHTML != "") {
    document.querySelector("#guesses").innerHTML = "";
  }

  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#low").classList.remove("hidden");
  document.querySelector("#high").classList.remove("hidden");
  document.querySelector("#correct").classList.remove("hidden");

  guess();
}

function guess() {
  guessCount++;
  middle = Math.floor((min + max) / 2);
  displayGuess(middle);

  if (min > max) {
    displayLie();
  } else {
    displayGuess;
  }

  console.log("min " + min, "max " + max, "guess " + middle);
}

function displayGuess(guessNumber) {
  document.querySelector("#guesses").insertAdjacentHTML(
    "beforeend",
    /* HTMl*/ `  

        <h3 class="blue"> Robot: I am guessing ${guessNumber} </h3>
    
        `
  );
}

function guessTooHigh() {
  console.log("Gættet var for højt");
  document.querySelector("#guesses").insertAdjacentHTML(
    "beforeend",
    /* HTMl*/ `  

        <h3 class="red"> Human: That guess was too high </h3>
    
        `
  );

  max = middle - 1;
  guess();
}

function guessTooLow() {
  console.log("Gættet var for lavt");
  document.querySelector("#guesses").insertAdjacentHTML(
    "beforeend",
    /* HTMl*/ `  

        <h3 class="red"> Human: That guess was too low </h3>
    
        `
  );

  min = middle + 1;
  guess();
}

function correct() {
  console.log("Gættet er korrekt ");
  document.querySelector("#guesses").insertAdjacentHTML(
    "beforeend",
    /* HTMl*/ `  

        <h3 class="green"> Human: That guess was too correct! </h3>
        <h3 class="blue"> Robot: I used ${guessCount} guesses </h3>
        
    
        `
  );
  startOver();
}

function displayLie() {
  document.querySelector("#guesses").insertAdjacentHTML(
    "beforeend",
    /* HTMl*/ `  

        <h3 class="red"> Human: I think you are lying ! </h3>
    
        `
  );
  startOver();
}

function startOver() {
  min = 0;
  max = 100;
  guessCount = 0;

  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#low").classList.add("hidden");
  document.querySelector("#high").classList.add("hidden");
  document.querySelector("#correct").classList.add("hidden");
}
