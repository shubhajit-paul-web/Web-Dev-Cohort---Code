let isDataAvailable = true;

const InstaData = new Promise(function(res, rej) {
    if (isDataAvailable) {
        res();
    } else {
        rej("Instagram data not found!");
    }
});

InstaData.then(function() {
    console.log("Instagram Data...");
}).then(function(errorMsg) {
    console.log(errorMsg);
})