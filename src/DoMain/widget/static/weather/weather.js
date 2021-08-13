function onGeoOk(position) {

    

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;



    fetch(url)
        .then((response => response.json()))
        .then((data) => {
            const weather = document.querySelector(".weather-state");
            const city = document.querySelector(".weather-city");
            city.innerText = data.name;
            const templateCelcius = data.main.temp -273;
            const templateCelciusRound = Math.round(templateCelcius)
            weather.innerText = `${data.weather[0].main} 
            
            ${templateCelciusRound}ºc` 
            
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
};


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

