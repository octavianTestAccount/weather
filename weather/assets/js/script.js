let temperature = document.getElementById("Temperature")
let description = document.getElementById("description")
let city = "Brasov"
let iconStatStorm = document.getElementById("iconStatStorm")
let iconStatSun = document.getElementById("iconStatSun")
let descRandom = ["sunny", "rain"]
let tempDsecription = ""

let weather = {
    temeprature:Math.floor(Math.random() * (45 - (-10)) + (-10)),
    description:descRandom[Math.floor(Math.random() * descRandom.length)]
}

console.log(weather.temeprature);
console.log(weather.description);


if (weather.temeprature <= 0 && weather.description === "rain" ){
    weather.description = "Snowstorm"
}

if(weather.temeprature <= 0){
    tempDsecription = "Freezing cold"
}else if(weather.temeprature <= 7 && weather.temeprature > 0){
    tempDsecription = "Cold"
}else if(weather.temeprature > 7 && weather.temeprature <= 21) {
    tempDsecription = "Warm"
} else{
    tempDsecription = "Extreme warmth"
}

if(weather.description === "sunny"){
    iconStatStorm.style.display = "none"
    iconStatSun.style.display = "block"
}else{
    iconStatStorm.style.display = "block"
    iconStatSun.style.display = "none"
}



if(city === "Brasov"){
    temperature.innerText = weather.temeprature + "°";
    description.innerText = weather.description + " " + "/" + " " +  tempDsecription;
}


