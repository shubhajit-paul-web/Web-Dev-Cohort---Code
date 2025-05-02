const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    fetch("https://api.github.com/users/async")
    .then(raw => raw.json())
    .then((data) => {
        for(let key in data) {
            console.log(`${key} => ${data[key]}`);
        }
    })
});