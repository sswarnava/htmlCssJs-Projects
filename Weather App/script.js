const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(reponse => reponse.json())
    .then(err => console.log(err))