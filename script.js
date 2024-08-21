    
    function contactBtn(event){
        event.preventDefault();
        let cityInput=document.querySelector('.search-input').value;
        let currentCity=document.querySelector('.current-city');
        currentCity.innerHTML=cityInput;      
    };
    let searchButton=document.querySelector('search-button');
    searchButton.addEventListener("click", contactBtn)