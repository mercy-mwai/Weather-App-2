    
    function contactBtn(event){
        event.preventDefault();
        let cityInput=document.querySelector('.search-input').value;
        let currentCity=document.querySelector('.current-city');
        currentCity.innerHTML=cityInput;      
    };
    let searchButton=document.querySelector('.search-button');
    searchButton.addEventListener("click", contactBtn);
    
    function currentDayOfWeek(){
        let date=new Date();  
        let DaysOfWeek=["Monday","Tuesday","Wednesday", "Thursday", "Friday", "Sturday","Sunday"];
        let dayName = daysOfWeek[date.getDay()];
        let hours=date.getHours();
        let minutes=date.getMinutes(); 
        const formattedTime = `${dayName} ${hours}:${minutes}`;
             
    };