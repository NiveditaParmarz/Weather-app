const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const searchBox = document.querySelector('.search-box');
const welcome_message = document.querySelector('.welcome-message');
const main_heading = document.querySelector('.main-heading');


async function checkWeather(city){
    const api_key =  "0331f29a43fdfcb6b3625f5575aa7fb3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json()); //otherwise `${url}`
    //if we get a resolved promise (the promise is fetching the api) then we will execute the function() inside 'then'
    //we will get a response once our promise gets resolved and then we exectute the line after => which is response.json in which we convert the response into the json format.
    
    if(weather_data.cod === '404'){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex"; 
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/h`;

    let weather = weather_data.weather[0].main;
    if(weather == 'Clouds'){
        weather_img.src = "cloud.png";
    }
    else if(weather == "Rain"){
        weather_img.src = "rain.png";
    }
    else if(weather == "Mist"){
        weather_img.src = "mist.png";
    }
    else if(weather == "Clear"){
        weather_img.src = "clear.png";
    }
    else if(weather == "Haze"){
        weather_img.src = "haze.png";
    }
    else if(weather== "Snow"){
        weather_img.src = "snow.png";
    }
    else if(weather == "Thunderstorm" || weather == "Storm"){
        weather_img.src = "thunderstorm.png";
    }

}

searchBtn.addEventListener('click', async ()=>{
    await checkWeather(inputBox.value);
    welcome_message.style.display = "none";
    // main_heading.style.width = "200px";
    main_heading.style.height = "50px";
    main_heading.style.fontSize = "20px";
})


inputBox.addEventListener('click', ()=>{
    inputBox.style.backgroundColor = "#caf0f8";

});



