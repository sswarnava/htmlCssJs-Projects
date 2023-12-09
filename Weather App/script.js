import { LOCATION_API, WEATHER_API } from "./api.js"

async function getTime(nowTime) {
    try {
        // using getTime we set the sun/moon emoji
        let nowTimeIs = parseInt(nowTime)

        let cloud = await document.getElementById('cloudy').innerHTML

        if (nowTimeIs > 5 && nowTimeIs < 18) {
            // Day Time
            if (cloud === 'clear') document.getElementById('sunMoonEmoji').src = './assets/clearSun.png'
            else if (cloud === 'cloudy') document.getElementById('sunMoonEmoji').src = './assets/cloudSun.png'
            else document.getElementById('sunMoonEmoji').src = './assets/rainnySun.png'
        } else {
            // Night time
            if (cloud === 'clear') document.getElementById('sunMoonEmoji').src = './assets/moon.png'
            else if (cloud === 'cloudy') document.getElementById('sunMoonEmoji').src = './assets/cloudMoon.png'
            else document.getElementById('sunMoonEmoji').src = './assets/rainnyMoon.png'
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }

}

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
        .then((reponse) => {
            getTime(reponse.hour)
        })
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
        .catch(err => alert(err))
}

function cloudStatus(cloudData) {
    if (cloudData <= 35) document.getElementById('cloudy').innerHTML = 'clear'
    else if (cloudData > 35 && cloudData <= 70) document.getElementById('cloudy').innerHTML = 'cloudy'
    else document.getElementById('cloudy').innerHTML = 'rainny'
}

function weatherStatus(weatherData) {
    cloudStatus(weatherData.cloud_pct)
    document.getElementById('temp').innerHTML = `${weatherData.temp}&degc`
    document.getElementById('winds').innerHTML = `${weatherData.wind_speed}Km/h`
    document.getElementById('humidity').innerHTML = `${weatherData.humidity}% humidity`
    document.getElementById('maxtemp').innerHTML = `${weatherData.max_temp}&degc`
    document.getElementById('mintemp').innerHTML = `${weatherData.min_temp}&degc`
}

cityLocation('delhi')

const findCity = (e) => {
    cityLocation(e.target.value)
    e.target.value = ''
}

document.getElementById('searchLocation').addEventListener("change", findCity)