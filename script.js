// const options = {
//     mathod: 'GET',
//     headers: {
//         'X-RAPIDAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
//         'X-RAPIDAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// }

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
//     .then(response => response.json())
//     .then((response) => {
//         console.log(response)

//     })
//     .catch(err => console.error(err))

const inputBox = document.querySelector(".input-box")
const searchBtn = document.getElementById("searchBtn")
const weather_img = document.querySelector(".weather-image")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const humidity = document.querySelector("#humidity")
const wind_speed = document.querySelector("#wind-speed")
const location_not_found = document.querySelector(".location-not-found")
const weather_body = document.querySelector(".weather-body")

async function checkWeather(city) {
    const api_key = "4d8d0c84a16dc2d6b3f5de3fad40e1a8"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weatherData = await fetch(`${url}`).then(res => res.json())

    console.log(weatherData);

    if (weatherData.cod === `404`) {
        location_not_found.style.display = "flex"
        weather_body.style.display = "none"
        return
    }

    location_not_found.style.display = "none"
    weather_body.style.display = "flex"

    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}℃`
    description.innerHTML = `${weatherData.weather[0].description}`
    humidity.innerHTML = `${weatherData.main.humidity}%`
    wind_speed.innerHTML = `${weatherData.wind.speed} Km/Hr`

    switch (weatherData.weather[0].main) {
        case 'Clouds':
            weather_img.src = "Image/cloud.png"
            break
        case 'Haze':
            weather_img.src = "Image/cloud.png"
            break
        case 'Clear':
            weather_img.src = "Image/clear.png"
            break
        case 'Rain':
            weather_img.src = "Image/rain.png"
            break
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value)
})