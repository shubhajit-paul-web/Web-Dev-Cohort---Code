const body = document.body;
const btn = document.querySelector("button");

const images = ["img1.png", "img2.png", "img3.png", "img4.png"];

// Generate a random Number
function randomNum(end = 1) {
    return Math.floor(Math.random() * end);
}

btn.addEventListener("click", function() {
    const randomImg = images[randomNum(images.length)]; // select a random element from the array
    const top = randomNum(90);
    const left = randomNum(90);
    const rotate = randomNum(360);

    const img = document.createElement("img"); // creating 'img' element

    // set attributes on img 
    img.setAttribute("src", `./images/${randomImg}`);
    img.setAttribute("class", "img");

    // adding css
    img.style.top = top + "%";
    img.style.left = left + "%";
    img.style.rotate = rotate + "deg";

    // append to body
    body.appendChild(img);
});