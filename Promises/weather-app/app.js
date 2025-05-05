// Private API key
const API_KEY = "62698d9825315333f8197c915aaa7a2c";
// Search elements
const searchBtn = document.querySelector(".search-btn");
// Weather informations
const weatherCard = document.querySelector(".weather-card-box");
const cityName = document.querySelector(".city-name");
const dateTime = document.querySelector(".current-datetime");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDesc = document.querySelector(".weather-desc");
const mainTemp = document.querySelector(".temp-main");
const feelsLike = document.querySelector(".temp-feels");
const detailItems = document.querySelector(".detail-item");

const formatDateTime = (timestamp) => {
	const date = new Date(timestamp * 1000);
	const formattedDate = date
		.toLocaleString("en-US", {
			month: "short", // 'May'
			day: "2-digit", // '05'
			year: "numeric", // '2025'
			hour: "numeric", // '18'
			minute: "2-digit", // '00'
			hour12: true, // 24-hour format
		})
		.replace(/,/, ", "); // Ensure comma and space separator

	return formattedDate;
};

// Handle search
const getCity = () => {
	const searchBar = document.querySelector(".search-bar");

	searchBtn.addEventListener("click", () => {
		let searchBarValue = searchBar.value.trim();

		if (searchBarValue === "") {
			alert("Search field is empty! Please write you city name");
			searchBar.value = "";
			return;
		} else {
			const fetchWeatherInformations = async () => {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBarValue}&appid=${API_KEY}&units=metric`);

				if (!response.ok) {
					alert("city not found");
					return;
				} else {
					let weatherData = await response.json();
					weatherCard.classList.remove("hidden");

					cityName.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
					dateTime.textContent = formatDateTime(weatherData.dt);
					weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
					weatherDesc.textContent = weatherData.weather[0].description;
					mainTemp.textContent = Math.round(weatherData.main.temp) + "°C";
					feelsLike.textContent = Math.round(weatherData.main.feels_like) + "°C";

					// Additional Weather Details
					detailItems.innerHTML = `
                        <div class="flex items-center space-x-2">
                            <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                            <p class="text-gray-600">Clouds: ${weatherData.clouds.all}%</p>
					    </div>
                        <div class="flex items-center space-x-2">
                            <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <p class="text-gray-600">Humidity: ${weatherData.main.humidity}%</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <p class="text-gray-600">
                                Wind:  ${weatherData.wind.speed.toFixed(1)}m/s, ${weatherData.wind.deg}°
                            </p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                            <p class="text-gray-600">Pressure: ${weatherData.main.pressure} hPa</p>
                        </div>
                    `;
				}
			};

			fetchWeatherInformations();
		}
	});
};

getCity();
