const images = [
    "0.jpeg",
    "2.jpeg",
    "3.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.querySelector("#img-container").appendChild(bgImage);




