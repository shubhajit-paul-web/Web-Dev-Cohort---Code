// Exercise: Movie Ticket Booking System

// Represents a single movie
class Movie {
    /**  
     * @param {string} title
     * @param {string} genre
     * @param {number} duration - number in minutes
     * @param {number} seatsAvailable
    */
    constructor(title, genre, duration, seatsAvailable) {
        this.title = title;
        this.genre = genre;
        this.duration = duration;
        this.seatsAvailable = seatsAvailable;
    }

    bookSeats(count) {
        if (this.seatsAvailable >= count) {
            this.seatsAvailable -= count;
            console.log(`🎟️ ${count} seat(s) successfully booked for "${this.title}".`);
        } else {
            console.log(`❌ Not enough seats available for "${this.title}". Only ${this.seatsAvailable} left.`);
        }
    }

    displayDetails() {
        console.log(`🎬 ${this.title} | Genre: ${this.genre} | Duration: ${this.duration} mins | Seats left: ${this.seatsAvailable}`);
    }
}

// Cinema: Represents the cinema which contains multiple movies.
class Cinema {
    constructor() {
        this.movies = []; // array of Movie objects
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    removeMovie(title) {
        title = title.toLowerCase();
        for(let movieIndex in this.movies) {
            if (this.movies[movieIndex].title.toLowerCase() === title) {
                this.movies.splice(movieIndex, 1);
                console.log(`"${title}" movie is deleted succesfuly...`);
                return;
            }
        }
        console.log(`"${title}" movie is not found!`);
    }

    listMovies() {
        console.log(`🎬 Available Movies (${this.movies.length}):`);
        this.movies.forEach(function(movie) {
            if (movie.seatsAvailable > 0) {
                console.log(`- ${movie.title} | Genre: ${movie.genre} | Duration: ${movie.duration} mins | Seats left: ${movie.seatsAvailable}`);
            }
        });
    }

    bookMovie(title, seatCount) {
        title = title.toLowerCase();
        for(let movieIndex in this.movies) {
            if (this.movies[movieIndex].title.toLowerCase() === title) {
                this.movies[movieIndex].bookSeats(seatCount);
                return;
            }
        }
        console.log(`"${title}" movie is not found!`);
    }
}

// Creating movies
const movieOne = new Movie("Inception", "Sci-Fi", 145, 50);
const movieTwo = new Movie("Sholay", "Action", 175, 30);

// Creating cinema
const cinemaHall = new Cinema();

// Add movies
cinemaHall.addMovie(movieOne);
cinemaHall.addMovie(movieTwo);

// List all movies
cinemaHall.listMovies();

// Book some tickets
cinemaHall.bookMovie("sholay", 2);
cinemaHall.bookMovie("sholay", 4);

// Try booking too many seats
cinemaHall.bookMovie("sholay", 30);