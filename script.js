"use strict";

function makeOnInput() {
  let timeoutID = null;

  return (event) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      console.log(event.target.value);
    }, 500);
  };
}

let textInput = document.querySelector("input");
textInput.addEventListener("input", makeOnInput());
