// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b4634041f8mshedba667d622017ap1bd867jsne7424e07211d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(reponse => reponse.json())
    .then(err => console.log(err))