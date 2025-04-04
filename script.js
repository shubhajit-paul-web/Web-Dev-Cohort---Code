const images = document.querySelectorAll("img");
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    [images[0].src, images[1].src] = [images[1].src, images[0].src];
});

// [var1, var2] = [var2, var1]