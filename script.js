const ul = document.querySelectorAll("li");


let liContents = Array.from(ul).map(function(li) {
    return "✅ " + li.textContent;
});

console.log(document.documentElement);




// ul.forEach(function(li) {
//     li.style.backgroundColor = "orange";
//     li.style.marginBlock = "5px";
//     li.style.padding = "8px";
// })
