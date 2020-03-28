/*
    created by Marcos Paulo
    github barretoMarcosPaulo

    1 - This script is destination for get city using  api openweathermap.

*/


function Card(city_query, temp_query, humidity_query, conditional_query){

    this.city = city_query
    this.temp = temp_query
    this.humidity = humidity_query
    this.conditional = conditional_query
    this.image_represetation = " "
    this.image_option = [
        ["Sunny","img/icons/sunny_sunshine.png"],
        ["Rain","img/icons/rain_wather.png"],
        ["Clear","img/icons/fog.png"],
        ["Winter","img/icons/Winter.png"],
        ["Default","img/icons/default.png"],
    ]
    this.getImageRepresentation = function(){
        let index_condition = -1

        for(let index in this.image_option){
            console.log(this.image_option[index][0], this.conditional)
            if (this.image_option[index][0] === this.conditional){
                index_condition = index
                break
            }
        }

        if(index_condition != -1){
            this.image_represetation = this.image_option[index_condition][1]
        }else{
            this.image_represetation = this.image_option[4][1]
        }
        

        return this.image_represetation
        
 
        
    }

    // Create struct html for render cards
    this.createCard = function (){


        let div_results = document.getElementById('results')
        let div_box_city = document.createElement('div')
        div_box_city.className = "box-city"
        div_results.appendChild(div_box_city)

        let city_text = document.createElement('label')
        city_text.className = "city"
        txt = document.createTextNode(this.city)
        city_text.appendChild(txt)

        let br = document.createElement('br')

        let temp_text = document.createElement('label')
        temp_text.className = "temp_info"
        txt = document.createTextNode(this.temp + " ºC")
        temp_text.appendChild(txt)


        let hr = document.createElement('hr')

        let img = document.createElement("img")
        img.className = "img_result"

        let humidity_text = document.createElement('label')
        humidity_text.className = "humidity"
        txt = document.createTextNode("Humidade em " + this.humidity + "%")
        humidity_text.appendChild(txt)

        img.src = this.getImageRepresentation()


        div_box_city.appendChild(city_text)
        div_box_city.appendChild(br)
        div_box_city.appendChild(temp_text)
        div_box_city.appendChild(hr)
        div_box_city.appendChild(img)
        div_box_city.appendChild(humidity_text)

    }
}


function search(){

    URL = "https://api.openweathermap.org/data/2.5/weather?"
    api_key = "Your Api Key"

    let city = document.getElementById('input_city').value
    let original_city = city 
    city = city.replace(/ /g, "%20")
 
    URL +="q="+city 
    URL +="&units=metric&appid="+api_key

    const request = new XMLHttpRequest()
    request.open("get", URL, false)
    
    request.send()
    
    let response = JSON.parse(request.responseText)
    
    const temp = response.main.temp
    const humidity = response.main.humidity
    const conditional = response.weather[0].main

    let card = new Card(original_city, temp, humidity, conditional)
    card.createCard()

}

