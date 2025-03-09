// ? Write a program to accept rating of the movie as double and Movie name as String.

function movieRatingAssign(movieName = "", rating = 0) {
    if (movieName.length > 0 && !isNaN(rating)) {
        let msg = "";
        if (rating >= 0 && rating <= 2) {
            msg = "Flop";
        } else if (rating >= 2.1 && rating <= 3.4) {
            msg = "Semi-hit";
        } else if (rating >= 3.5 && rating <= 4.5) {
            msg = "Hit";
        } else if (rating >= 4.6 && rating <= 5) {
            msg = "Super Hit";
        }

        return `${movieName} is a ${msg}`;
    } else {
        return "Please pass correct arguments: moveName is in string and rating will be number";
    }
}

const ans = movieRatingAssign("KGF", 4.9);
console.log(ans);
