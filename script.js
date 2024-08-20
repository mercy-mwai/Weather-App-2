let weather={
    adelaide: {
        temp: 22.6,
        humidity: 21,
        wind: 12,
    },
    barcelona: {
        temp:19,
        humidity: 31,
        wind: 4,
    },
    lisbon: {
        temp: 17.4,
        humidity: 21,
        wind: 13,
    },
    beijing: {
        temp: 18.7,
        humidity: 24,
        wind: 13,
    },
    nairobi: {
        temp: 22.3,
        humidity: 23,
        wind: 16,
    }
}
let city=prompt("Enter a city?");
city=city.toLowerCase();
if(weather[city] !== undefined){
    let temperature=weather[city].temp;
    let humidity=weather[city].humidity;
    let wind=weather[city].wind;
    let celsiusTemperature = Math.round(temperature);
    let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
    alert(
        `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
      );
    } else {
      alert(
        `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
      );
    };
    
    l
    
    function contactBtn(){
        event.preventDefault();
        let cityInput=document.querySelector('search-input').value;
        let currentCity=document.querySelector('current-details');
        currentCity.innerHTML=cityInput.value;      
    }