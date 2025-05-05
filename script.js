const pizzaOrder = new Promise((resolve, reject) => {
    let isOrdered = true;

    if (isOrdered) {
        resolve("Order successfuly completed...")
    } else {
        reject("Sorry, your order is cancled...");
    }
});

pizzaOrder
.then((data) => {
    console.log(data);
    return data;
})
.then((data) => {
    console.log(data,"hey... second time");
})
.then(() => {
    console.log("end...");
    
})
.catch((data) => {
    console.log(data);
})