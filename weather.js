let weather = null;

// Array of locations with latitude and longitude for each
const locations = [
    { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
    { name: "New York", lat: 40.7128, lon: -74.0060 },
    { name: "London", lat: 51.5074, lon: -0.1278 },
    { name: "Sydney", lat: -33.8688, lon: 151.2093 },
    { name: "Paris", lat: 48.8566, lon: 2.3522 }
];

// Function to fetch weather data for a specific latitude and longitude
async function getWeather(lat, lon) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    weather = await response.json();
    return weather.current_weather;  // Return only the current weather data
}

// Function to display the weather data in the DOM
function displayWeather(city, temp, windspeed) {
    const container = document.createElement("div");
        container.classList.add("weather-box");

    const header = document.createElement("h2");
    header.textContent = city;
    container.appendChild(header);

    const paragraph = document.createElement("p");
    paragraph.textContent = `Temperature: ${temp} C`;
    container.appendChild(paragraph);

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = `Wind Speed: ${windspeed} km/h`;
    container.appendChild(paragraph2);

    document.getElementById("weather-container").appendChild(container);
}

/*
// Main function to coordinate the fetching and displaying of weather data
async function main() {
    await getWeather();
    for (let i = 0; i < 5; i++) {
        displayWeather(locations[i].name, getWeather(locations[i].lat, locations[i].lon).current_weather.temperature, getWeather(locations[i].lat, locations[i].lon).current_weather.windspeed);
    }
}
*/
async function main() {
    for (let i = 0; i < locations.length; i++) {
        // Await the weather data before accessing temperature and windspeed
        const weatherData = await getWeather(locations[i].lat, locations[i].lon);
        if (weatherData) {
            displayWeather(locations[i].name, weatherData.temperature, weatherData.windspeed);
        }
    }
}


// Call the main function when the page loads
main();

setInterval(main, 600000);