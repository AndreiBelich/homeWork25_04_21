"use strict";

const counterButton = document.querySelector("#button-counter");
counterButton.innerText = counterButton.dataset.counter;

const buttonHandler = ({
  target,
  target: {
    dataset: {
      counter
    }
  }
}) => {
  if(counter <= 0){
    target.removeEventListener("click", buttonHandler);
    return;
  }
  target.dataset.counter = --counter;
  target.innerText = counter;
}

counterButton.addEventListener("click", buttonHandler);