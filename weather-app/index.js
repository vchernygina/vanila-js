const apikey = "836c7157e9ad3028ce7fce7274d006b7";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.getElementById("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${Math.round(data.main.humidity)}`,
      `Wind speed: ${Math.round(data.wind.speed)}`,
    ];

    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`;

    weatherDataEl.querySelector(
      ".temperature"
    ).textContent = `${temperature}°С`;

    weatherDataEl.querySelector(".description").textContent = description;

    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");

    console.log(data);
  } catch (error) {}
}
