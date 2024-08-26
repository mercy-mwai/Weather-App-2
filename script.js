    function contactBtn(event){
        event.preventDefault();
        let cityInput=document.querySelector('.search-input').value;
        let currentCity=document.querySelector('.current-city');
        currentCity.innerHTML=cityInput;      
    };
    let searchButton=document.querySelector('.search-button');
    searchButton.addEventListener("click", contactBtn);
    
    function currentDayOfWeek(date){ 
        let hours=date.getHours();
        let minutes=date.getMinutes(); 
        let day=date.getDay();
        if (minutes < 10) {
            minutes = `0${minutes}`;
          }
        
          if (hours < 10) {
            hours = `0${hours}`;
          }
          let DaysOfWeek=["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
          let formattedDay=DaysOfWeek[day];
          return `${formattedDay} ${hours}:${minutes}`;
             
    };
    let currentDateElement=document.getElementById('current-date');
    let currentDate=new Date();
    currentDateElement.innerHTML = currentDayOfWeek(currentDate);
