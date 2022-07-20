/*let currentDayToday = new Date();

function showDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDay = days[date.getDay()];

  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinute = date.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  let currentDayNumber = date.getDate();

  if (currentDayNumber < 10) {
    currentDayNumber = `0${currentDayNumber}`;
  }

  let currentMonthNumber = date.getMonth();

  if (currentMonthNumber < 10) {
    currentMonthNumber = `0${currentMonthNumber + 1}`;
  }
  let currentYearNumber = date.getFullYear(); // 2021

  currentYearNumber = currentYearNumber - 2000;

  let currentDate = `${currentDay}    ${currentDayNumber}.${currentMonthNumber}.${currentYearNumber}   ${currentHour}:${currentMinute}`;
  return currentDate;
}

let now = document.querySelector("#now");
now.innerHTML = showDate(currentDayToday);

function tempCelcius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = "10";
}

let elementCelcius = document.querySelector("#celcius");
elementCelcius.addEventListener("click", tempCelcius);

function tempFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = "30";
}

let elementFahrenheit = document.querySelector("#fahrenhight");
elementFahrenheit.addEventListener("click", tempFahrenheit);

function displayWeather(response) {
  document.querySelector("#city_name").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;



}

function searchCity(city) {
  let apiKey = "a0af2ff035fd05f805d6f07c483c3bc8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city_input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "a0af2ff035fd05f805d6f07c483c3bc8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search_form");
searchForm.addEventListener("submit", handleSubmit);

let searchFormButton = document.querySelector("#search_form");
searchForm.addEventListener("click", handleSubmit);

let currentLocationButton = document.querySelector("#current_button");
currentLocationButton.addEventListener("click", getCurrentLocation);

*/

function displayTemperature(response){
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#descriptuin");


  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;


}


let apiKey = "a0af2ff035fd05f805d6f07c483c3bc8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);