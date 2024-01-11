const apikey = "2066068ce92374345ed4cb6bc40655f7"
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const weatherIcon = document.querySelector(".weather img")
async function checkweather(city){
    const response = await fetch(url + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".erro p").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        let data = await response.json()
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('#humi').innerHTML = data.main.humidity + ` %`
        document.querySelector('#speed').innerHTML = Math.round(data.wind.speed)  + ` Km/h`
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ` °C`
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/images/clouds.png"
        }else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "/images/clear.png"
        }else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "/images/rain.png"
        }else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "/images/drizzle.png"
        }else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "/images/mist.png"
        }else if (data.weather[0].main == "Snow"){
            weatherIcon.src = "/images/snow.png"
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".erro p").style.display = "none"
    }
}
const citybox = document.querySelector(".search input")
const cityBtn = document.querySelector(".search button")
cityBtn.addEventListener("click",()=>{
checkweather(citybox.value)
})
