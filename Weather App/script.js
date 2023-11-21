import { LOCATION_API, WEATHER_API } from "./api.js"
// console.log(WEATHER_API);

let btn = document.getElementById('locationBtn')

btn.addEventListener('click', (city) => {
    cityLocation(document.getElementById('location').value)
    document.getElementById('location').value = ''
})

// cityLocation('delhi')

function cityLocation(city) {
    document.getElementById('currentLocation').innerHTML = city
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
        .then((reponse) =>
            weatherStatus(reponse)
        )
        .catch(err => console.log(err))
}

function weatherStatus(weatherData) {
    console.log(weatherData)
    document.getElementById('temp').innerHTML = `${weatherData.temp}&degc`
    document.getElementById('winds').innerHTML = `${weatherData.wind_speed}Km/h`
    document.getElementById('humidity').innerHTML = `${weatherData.humidity}% humidity`
    document.getElementById('maxtemp').innerHTML = `${weatherData.max_temp}&degc`
    document.getElementById('mintemp').innerHTML = `${weatherData.min_temp}&degc`

    cloudStatus(weatherData.cloud_pct)
}

function cloudStatus(cloudData) {
    if (cloudData <= 35) {
        document.getElementById('cloudy').innerHTML = 'clear'
    }
    else if (cloudData > 35 && cloudData <= 70) {
        document.getElementById('cloudy').innerHTML = 'cloudy'
    }
    else{
        document.getElementById('cloudy').innerHTML = 'rainny'
    }
}


//     feels_like = weatherData.feels_like
//     sunrise = reponse.sunrise
//     sunset = reponse.sunset
