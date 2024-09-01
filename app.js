"use strict";

window.addEventListener("load", start);

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
  let guessNumber = Math.floor(Math.random() * 100);
  displayGuess(guessNumber);
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

  guess();
}

function correct() {
  console.log("Gættet er korrekt ");
  document.querySelector("#guesses").insertAdjacentHTML(
    "beforeend",
    /* HTMl*/ `  

        <h3 class="green"> Human: That guess was too correct! </h3>
    
        `
  );
  startOver();
}

function startOver() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#low").classList.add("hidden");
  document.querySelector("#high").classList.add("hidden");
  document.querySelector("#correct").classList.add("hidden");
}
