
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response){
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  



  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`) ;
  iconElement.setAttribute ("alt",  response.data.weather[0].description);


}

function handleSubmit(event){
  event.preventDefault();
  let cityInputElement = document.querySelector("#city_input");
  search(cityInputElement.value);
}

function search(city){
let apiKey = "a0af2ff035fd05f805d6f07c483c3bc8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

search("New York");

let form = document.querySelector("#search_form");
form.addEventListener("submit", handleSubmit)

let searchFormButton = document.querySelector("#search_form_button");
searchFormButton.addEventListener("click", handleSubmit);





let currentLocationButton = document.querySelector("#current_button");
currentLocationButton.addEventListener("click", getCurrentLocation);

function searchLocation(position) {
  let apiKey = "a0af2ff035fd05f805d6f07c483c3bc8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let fahrenhightLink = document.querySelector("#fahrenhight-link");
fahrenhightLink.addEventListener("click", displayFahrenhightTemperature);

function displayFahrenhightTemperature(event){
  event.preventDefault();
  let fahrenhightTemperature = (14*9)/5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenhightTemperature);
}






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

