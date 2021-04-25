"use strict";

const changeButton = document.querySelector("#change-color-btn");

const randomValue = () => Math.floor(Math.random() * 256);
const convertToHex = (num) => {
  let hexNumber = num.toString(16);
  if(hexNumber.length % 2){
    hexNumber = "0" + hexNumber;
  }
  return hexNumber;
}

const getRandomColor = ({target}) => {
  const red = randomValue();
  const green = randomValue();
  const blue = randomValue();
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  const hexColor = `#${convertToHex(red)}${convertToHex(green)}${convertToHex(blue)}`;
  target.innerText = hexColor;
  target.style.backgroundColor = rgbColor;
}

changeButton.addEventListener("click", getRandomColor);