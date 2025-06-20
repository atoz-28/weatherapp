
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "9206bc6027f51ae447e245598be50784";


weatherForm.addEventListener("submit", async event =>{
    event.preventDefault(); // stop the page from refreshing
    const city = cityInput.value; // get the city from input
     
    if(city){
         try{
            const weatherData = await getWeatherData(city);
            getWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city")
    }
});

async function getWeatherData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if(!response.ok){
        throw new Error("City is not found");
    }

    return await response.json();

}


function getWeatherInfo(data){ 
    const {name: city,
     main: {temp, humidity}, 
     weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex"; // show the card


    const cityDisplay = document.createElement("h1");
    const humidityDisplay = document.createElement("p");
    const tempDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("p");


    cityDisplay.textContent = `"${city}"`;
    humidityDisplay.textContent =  `Humidity: ${humidity}%`;
    tempDisplay.textContent = `${temp.toFixed(1)}°C`;
    descDisplay.textContent = description;
    emojiDisplay.textContent = getWeatherEmoji(id);



    cityDisplay.classList.add("cityDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    tempDisplay.classList.add("tempDisplay");
    descDisplay.classList.add("descDisplay");
    emojiDisplay.classList.add("emojiDisplay");


    card.appendChild(cityDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(descDisplay);
    card.appendChild(emojiDisplay);


};

function getWeatherEmoji(weatherId){
    if (weatherId >= 200 && weatherId < 300) return "⛈️"; // Thunderstorm
    if (weatherId >= 300 && weatherId < 500) return "🌦️"; // Drizzle
    if (weatherId >= 500 && weatherId < 600) return "🌧️"; // Rain
    if (weatherId >= 600 && weatherId < 700) return "❄️"; // Snow
    if (weatherId >= 700 && weatherId < 800) return "🌫️"; // Mist
    if (weatherId === 800) return "☀️"; // Clear
    if (weatherId > 800) return "☁️"; // Clouds

    return "❓"; // unknow

};

function displayError(message){
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}




































