    function contactBtn(event){
        event.preventDefault();
        let cityInput=document.querySelector('.search-input').value;
        let currentCity=document.querySelector('.current-city');
        currentCity.innerHTML=cityInput;      
    };
    let searchButton=document.querySelector('.search-button');
    searchButton.addEventListener("click", contactBtn);
    
    function currentDayOfWeek(){ 
        let DaysOfWeek=["Monday","Tuesday","Wednesday", "Thursday", "Friday", "Sturday","Sunday"];
        let dayName = daysOfWeek[date.getDay()];
        let hours=date.getHours();
        let minutes=date.getMinutes(); 
        if (minutes < 10) {
            minutes = `0${minutes}`;
          }
        
          if (hours < 10) {
            hours = `0${hours}`;
          }
        
        return `${dayName}:${hours}:${minutes}`;
             
    };
    let currentDateElement=document.getElementById('current-date');
    let currentDate=new Date();
    currentDateELement.innerHTML = currentDayOfWeek(currentDate);
