let btn = document.getElementById('locationBtn')

btn.addEventListener('click', (city) => {
    weatherCity(document.getElementById('location').value)
    document.getElementById('location').value = ''
})

weatherCity('delhi')

function weatherCity(city) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b4634041f8mshedba667d622017ap1bd867jsne7424e07211d',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

        }
    };

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
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
