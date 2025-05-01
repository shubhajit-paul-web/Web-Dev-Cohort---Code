function orderFood() {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            let chance = Math.floor(Math.random() * 101);
            if (chance <= 30) {
                rej();
            } else {
                res();
            }
        }, 2000);
    });
}

const orderOne = orderFood();
orderOne.then(function() {
    console.log("🍕 Pizza Deliverd!");
}).catch(function() {
    console.log("🚫 Deliverd faild!!!");
});