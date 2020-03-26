/*
    created by Marcos Paulo
    github barretoMarcosPaulo

    1 - This script is destination for get city using  api openweathermap.

*/


// Path images
const path_sunny = "img/icons/sunny_sunshine.png"
const path_rain = "img/icons/rain_wather.png"
const path_clean = "img/icons/fog.png"
const path_winter = "img/icons/Winter.png"


function search(){

    URL = "https://api.openweathermap.org/data/2.5/weather?"
    api_key = localStorage.getItem('api_key')

    let city = document.getElementById('input_city').value
    let original_city = city 
    city = city.replace(/ /g, "%20")
 
    URL +="q="+city 
    URL +="&units=metric&appid="+api_key

    const request = new XMLHttpRequest()
    request.open("get", URL, false)
    
    request.send()
    
    let response = JSON.parse(request.responseText)
    console.log(response)
    
    const temp = response.main.temp
    const humidity = response.main.humidity
    const conditional = response.weather[0].main

    create_card(original_city,temp,humidity,conditional)

}

function create_card(city,temp,humidity,conditional){

    let div_results = document.getElementById('results')
    
    let div_box_city = document.createElement('div')
    div_box_city.className="box-city"
    div_results.appendChild(div_box_city)

    let city_text = document.createElement('label')
    city_text.className = "city"
    txt = document.createTextNode(city)
    city_text.appendChild(txt)

    let br = document.createElement('br')

    let temp_text = document.createElement('label')
    temp_text.className = "temp_info"
    txt = document.createTextNode(temp+" ºC")
    temp_text.appendChild(txt)

    
    let hr = document.createElement('hr')
    
    let img = document.createElement("img")
    img.className = "img_result"

    let humidity_text = document.createElement('label')
    humidity_text.className ="humidity"
    txt = document.createTextNode("Humidade em "+humidity+"%")
    humidity_text.appendChild(txt)
    
    if (conditional == "Rain"){
        img.src = path_rain
    }
    if (conditional == "Clouds"){
        img.src = path_clean
    }
    if (conditional == "Clear") {
        img.src = path_sunny
    }
    if (conditional == "Snow") {
        img.src = path_winter
    }

    div_box_city.appendChild(city_text)
    div_box_city.appendChild(br)
    div_box_city.appendChild(temp_text)
    div_box_city.appendChild(hr)
    div_box_city.appendChild(img)
    div_box_city.appendChild(humidity_text)

    // console.log(conditional)


}