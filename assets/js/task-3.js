"use strict";

const changeImageButton = document.querySelector("#change-image-btn");
const image = document.querySelector(".image-wrapper > .image");
const link = `https://picsum.photos/200/300?random=`;
/*
https://picsum.photos/seed/picsum/200/300
https://picsum.photos/200/300
https://picsum.photos/200/300?random=1
https://picsum.photos/id/870/200/300?grayscale&blur=2
https://picsum.photos/id/870/200/300
 */


const changeImage = () => {
  const randomParam = Math.floor(Math.random() * 100);
  const query = link + randomParam;
  image.setAttribute("src", query);
}

changeImageButton.addEventListener("click", changeImage);