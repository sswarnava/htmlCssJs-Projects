let weatherLocation = document.getElementById('location')
let btn = document.getElementById('locationBtn')

btn.addEventListener('click', () => {
    getCity(weatherLocation.value)
})

const getCity = (e) => {
    console.log(e);
}
