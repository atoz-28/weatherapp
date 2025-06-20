/*
function walkDog(){

    return new Promise((resolve, reject)=>{
     setTimeout(() =>{
        resolve("You walked the dog!");
    },1000)
    })
}

function cleanKitchen(){

    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
        resolve("You clean the kitchen");
    },1000)

    }) 
}

function takeOutTrash(){
     return new Promise((resolve, reject)=>{
        setTimeout(() =>{
        resolve("You take out the trash");
    },1000)
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("All task is complete!")});
*/



/*
function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const dogWalked = true;
            if(dogWalked){
                resolve("You walked the dog");
            } else {
                reject("You DIDNT walked the dog")
            }
        }, 1000)
    })
}
function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("You clean the kitchen");
        }, 1000)
    })
}
function takeOutTrash(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("You take out the trash");
        }, 1000)
    })
}


async function doChores(){
    try{

    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("All task is complete");

    }
    catch{
        console.error(error);
    }
}

doChores();

*/














 /*   
fetchData();

async function fetchData(){


    try{

        const pokemonName = document.getElementById("pokemonName").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
         
        if(!response.ok){
            throw new Error("You could not fetch  resources");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement =  document.getElementById("pokemonSprite");
        
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";

         

    }
    catch(error){
        console.error(error);
    }
}

*/

















/*



const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "9206bc6027f51ae447e245598be50784";





weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }
        catch(error){
            console.error(error);
            displayError(error);
        }

    }
    else {
        displayError("Please enter a city");
    }

});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();

} 

function displayWeatherInfo(data){

   const {name: city,
     main: {temp, humidity}, 
     weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    const tempDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    humidityDisplay.textContent = `humidity: ${humidity}%`;
    descDisplay.textContent = description;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    humidityDisplay.classList.add("humidtyDisplay");
    descDisplay.classList.add("descDisplay");
    tempDisplay.classList.add("tempDisplay");
    weatherEmoji.classList.add("weatherEmoji");


    card.appendChild(cityDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(weatherEmoji);
    
}

function getWeatherEmoji(weatherId){

    switch(true){
        case(weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case(weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case(weatherId >= 400 && weatherId < 500):
            return "☔";
        case(weatherId >= 500 && weatherId < 600):
            return "❄️";
        case(weatherId >= 600 && weatherId < 700):
            return "☔";
        case(weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case(weatherId === 800):
            return "☀️";
        case(weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
        
    }

}



function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex"
    card.appendChild(errorDisplay);
    
}

*/
















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




































