/*
    created by Marcos Paulo
    github barretoMarcosPaulo

    1 - This script is destination for get city using  api openweathermap.

*/



function search(){

    URL = "https://api.openweathermap.org/data/2.5/weather?"
    api_key = localStorage.getItem('api_key')

    let city = document.getElementById('input_city').value
    city = city.replace(/ /g, "%20")
 
    URL +="q="+city 
    URL +="&units=metric&appid="+api_key

    const request = new XMLHttpRequest()
    request.open("get", URL, false)
    
    request.send()
    
    let response = JSON.parse(request.responseText)
    console.log("AAAAAAA", response)
}