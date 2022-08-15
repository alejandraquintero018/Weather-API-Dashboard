let apiKey = "53f47a6135028751f9dd25e0e925cb7f"
let icon = 
//document.querySelector('#city').addEventListener

document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();
    let cityName = document.getElementById('city').value; 
    getWeather(cityName);
    localStorage.setItem("city", cityName);
    var getcity = localStorage.getItem("city");
    document.getElementById("usercity").textContent = getcity;
    document.querySelector(".container").setAttribute("class", "show");
});


//document.querySelector('.history').textContent = getcity;


function geticon(searchValue){
    fetch ('http://openweathermap.org/img/w/icon=${searchValue}.png').then(function(res){
        return res.json();
    }).then(function(data){
        geticon(data.city.coord.lat, data.city.coord.lon);
    })

}

function getWeather(searchValue){
fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=imperial&appid=${apiKey}`).then(function(res){
    return res.json();
}).then(function(data){
    console.log(data);
    getUV(data.city.coord.lat, data.city.coord.lon);
    todayWeather(data.city.coord.lat, data.city.coord.lon);

    //day1
    document.getElementById('date1').textContent = data.list[3].dt_txt;

    document.getElementById('temp1').textContent = data.list[3].main.temp;
    document.getElementById('wind1').textContent = data.list[3].wind.speed;
    document.getElementById('hum1').textContent = data.list[3].main.humidity;
    //day2
    document.getElementById('date2').textContent = data.list[11].dt_txt;
    document.getElementById('icon2').textContent = data.list[11].weather[0].id;
    document.getElementById('temp2').textContent = data.list[11].main.temp;
    document.getElementById('wind2').textContent = data.list[11].wind.speed;
    document.getElementById('hum2').textContent = data.list[11].main.humidity;
    //day3
    document.getElementById('date3').textContent = data.list[19].dt_txt;
    document.getElementById('icon3').textContent = data.list[19].weather[0].icon;
    document.getElementById('temp3').textContent = data.list[19].main.temp;
    document.getElementById('wind3').textContent = data.list[19].wind.speed;
    document.getElementById('hum3').textContent = data.list[19].main.humidity;
    //day4
    document.getElementById('date4').textContent = data.list[27].dt_txt;
    document.getElementById('icon4').textContent = data.list[27].weather[0].icon;
    document.getElementById('tem4').textContent = data.list[27].main.temp;
    document.getElementById('wind4').textContent = data.list[27].wind.speed;
    document.getElementById('hum4').textContent = data.list[27].main.humidity;;
    //day 5
    document.getElementById('date5').textContent = data.list[35].dt_txt;
    document.getElementById('icon5').textContent = data.list[35].weather[0].icon;
    document.getElementById('temp5').textContent = data.list[35].main.temp;
    document.getElementById('wind5').textContent = data.list[35].wind.speed;
    document.getElementById('hum5').textContent = data.list[35].main.humidity;

})
}
function getUV(lat, lon){
    fetch (`http://api.openweathermap.org/data/2.5/uvi?&lat=${lat}&lon=${lon}&appid=${apiKey}`).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        let uvValue = data.value;
        JSON.parse(uvValue);
        document.getElementById('uv').textContent = uvValue;
        if(uvValue < 3) {
            document.querySelector("#uv").setAttribute("class", "mild")
        }if(3 < uvValue < 6 ){
            document.querySelector("#uv").setAttribute("class", "moderate")
        }if (6 < uvValue < 8) {
            document.querySelector("#uv").setAttribute("class", "high")
        }if (8 < uvValue < 10) {
            document.querySelector("#uv").setAttribute("class", "very-high")
        }else {
            document.querySelector("#uv").setAttribute("class", "severe")
        }
    })
}
function todayWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
    })
}

//local storage of the user input



//create a span by the temp or it will be replaced 

//$(document).ready(function() {
   // M.updateTextFields();
  //});

  //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}