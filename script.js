var a = 10; // Global scope (accesible everywhere)

function demo() {
    console.log(a);

    var b = 20; // not accessiable outside the function
}

demo();
console.log(b); // b is not defined
