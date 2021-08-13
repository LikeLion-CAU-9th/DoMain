
function onGeoOk(position) {
    const lati = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=()`
    fetch(url)
        .then((response => response.json())
        .then((data) => {
                const weather = document.querySelector("#weather span:first-child")
                const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
});

function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.location(onGeoOk, onGeoError);