function switchDailyIcon() {
  const icon = document.querySelector(".dailyIcon");
  console.log(icon);
  if (weather === sunny) {
    icon.innerHTML;
  }
}

function switchDegrees() {
  const degreesC = document.getElementById("degreesC");
  const degreesF = document.getElementById("degreesF");

  degreesC.classList.toggle("active");
  degreesF.classList.toggle("active");
}
async function fetchWeather(loc) {
  try {
    let url = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=d89a23f4323f47e29e8140329232307&q=${loc}`,
      { mode: "cors" }
    );
    console.log(url);
    let data = await url.json();
    console.log(data);
    const degreesC = document.getElementById("degreesC");
    const degreesF = document.getElementById("degreesF");
    degreesC.textContent = `${data.current.temp_c} °C`;
    degreesF.textContent = `${data.current.temp_f} °F`;
  } catch {
    console.log(error);
  }
}
// need to fetch and switch icons for daily weather
function displayWeather(data) {
  const condition = document.getElementById("condition");
  const degreesC = document.getElementById("degreesC");
  const degreesF = document.getElementById("degreesF");
  const city = document.getElementById("city");
  const country = document.getElementById("country");
  const date = document.getElementById("date");
  const chanceRain = document.querySelector(".chanceOfRainData");
  const humidity = document.querySelector(".humidityData");
  const feelsLike = document.querySelector(".feelsLikeData");
  const wind = document.querySelector(".windData");
  const aqi = document.querySelector(".aqiData");

  condition.textContent = data.current.condition.text;
  degreesC.textContent = `${data.current.temp_c}°C`;
  degreesF.textContent = `${data.current.temp_f}°F`;
  city.textContent = `${data.location.name}, ${data.location.region}`;
  country.textContent = `${data.location.country}`;
}
