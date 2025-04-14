const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const elemCountText = document.querySelector(".elements-count");

let countElems = 1;

btn.addEventListener("click", function() {
    if (countElems <= 10) {
        const li = document.createElement("li");
        li.textContent = `Item ${countElems}`;
        ul.appendChild(li);
    
        elemCountText.textContent = `${countElems}/10 elements created`;
        countElems++;

        if(countElems === 11) {
            btn.disabled = true;
            btn.style.cursor = "not-allowed";
            btn.style.opacity = "0.8";
        }
    }
});