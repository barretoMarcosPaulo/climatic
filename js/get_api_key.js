/*
    created by Marcos Paulo
    github barretoMarcosPaulo

    1 - This script is destination for get and save api key.
    2 - Set the api key in local storage
    3 - I using api openweathermap, https://openweathermap.org/
    4 - Generate your api key in https://openweathermap.org/

*/

// Set path json with your api key
FILE = "/home/marcos/projects/web/climatic/my_api_key.json"


function readFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


readFile(FILE, function(text){
    let data = JSON.parse(text)
    localStorage.setItem("api_key", data.api_key)
})



