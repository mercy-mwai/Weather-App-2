    
    function contactBtn(){
        event.preventDefault();
        let cityInput=document.querySelector('search-input').value;
        let currentCity=document.querySelector('current-details');
        currentCity.innerHTML=cityInput.value;      
    };
    let searchInput=document.querySelector('search-input');
    searchInput.addEventListener("click", contactBtn)