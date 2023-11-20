import { LOCATION_API, WEATHER_API } from "./api.js"
// console.log(WEATHER_API);

let btn = document.getElementById('locationBtn')

btn.addEventListener('click', (city) => {
    cityLocation(document.getElementById('location').value)
    document.getElementById('location').value = ''
})

cityLocation('delhi')

function cityLocation(city) {
    // get city timezone using api fetch
    const urlTime = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${city}`;
    const cityOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': LOCATION_API,
            'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(urlTime, cityOptions)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.error(error))

    // get weather using api fetch
    const urlWeather = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': WEATHER_API,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

        }
    };

    fetch(urlWeather, options)
        .then(reponse => reponse.json())
        .then((reponse) => console.log(reponse))
        .catch(err => console.log(err))
}




// document.getElementById('cloud_pct').innerHTML = reponse.cloud_pct
//     feels_like = reponse.feels_like
//     humidity = reponse.humidity
//     max_temp = reponse.max_temp
//     min_temp = reponse.min_temp
//     sunrise = reponse.sunrise
//     sunset = reponse.sunset
//     temp = reponse.temp
//     wind_degrees = reponse.wind_degrees
//     wind_speed = reponse.wind_speed
