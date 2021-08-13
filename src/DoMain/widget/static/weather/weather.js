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
    alert("크롬창에서 날씨에 대한 위치정보를 허용해주세요!");
};


const weather = (contents, index) => {
    let elem = getWeatherElements();
    document.querySelector('.main-board').innerHTML += elem;
    let widgetObj = {};
    widgetObj['type'] = 'weather';
    widgetObj['contents'] = contents;
    document.querySelectorAll('.weatherHidden')[index].value = JSON.stringify(widgetObj);

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}



