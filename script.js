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
}