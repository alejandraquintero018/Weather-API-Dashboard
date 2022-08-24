let apiKey = "53f47a6135028751f9dd25e0e925cb7f"
let userHistory = [];
let historyEl = document.querySelector(".history");
//document.querySelector('#city').addEventListener


//button that returns the current weather as well as the 5-day forecast and stores the 
document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    let cityName = document.getElementById('city').value;
    getWeather(cityName);
    localStorage.setItem('city', cityName);
    document.getElementById("usercity").textContent = cityName;
    document.querySelector("#cards").setAttribute("class", "show");

    for (let i = 0; i < userHistory.length; i++){
        let userHistory = localStorage.setItem('city', cityName);
        var history = document.createElement("button");
        history.setAttribute('class', 'btn waves-effect waves-light col s4 blue darken-4')
        history.textContent = localStorage.getItem('city')
        historyEl.append(history);
    }
    
});

//local storage of the user input and output of that local storage
 
    for (let i = 0; i < userHistory.length; i++){
 
    var history = document.createElement("button");
    history.textContent = localStorage.getItem('city')
    historyEl.append(history);
}

//document.querySelector('.history').textContent = getcity;

function geticon(icon) {
    fetch('http://openweathermap.org/img/w/icon=${icon}.png').then(function (res) {
        return res.json();
    }).then(function (data) {
        geticon(data.city.coord.lat, data.city.coord.lon);
    })
}

function getWeather(searchValue) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=imperial&appid=${apiKey}`).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        getUV(data.city.coord.lat, data.city.coord.lon);
        todayWeather(data.city.coord.lat, data.city.coord.lon);

        //day1
        let getDate1 = data.list[5].dt_txt;
        let formatDate1 = dayjs(getDate1).format('dddd, MMMM D, ha');
        document.getElementById('date1').textContent = formatDate1;
        let icon1 = data.list[5].weather[0].icon;
        document.getElementById('icon1').src = `http://openweathermap.org/img/wn/${icon1}@2x.png`
        document.getElementById('temp1').textContent = data.list[5].main.temp;
        document.getElementById('wind1').textContent = data.list[5].wind.speed;
        document.getElementById('hum1').textContent = data.list[5].main.humidity;
        //day2
        let getDate2 = data.list[13].dt_txt;
        let formatDate2 = dayjs(getDate2).format('dddd, MMMM D, ha');
        document.getElementById('date2').textContent = formatDate2;
        let icon2 = data.list[13].weather[0].icon;
        console.log(icon2);
        document.getElementById('icon2').src = `http://openweathermap.org/img/wn/${icon2}@2x.png`
        document.getElementById('temp2').textContent = data.list[13].main.temp;
        document.getElementById('wind2').textContent = data.list[13].wind.speed;
        document.getElementById('hum2').textContent = data.list[13].main.humidity;
        //day3
        let getDate3 = data.list[21].dt_txt;
        let formatDate3 = dayjs(getDate3).format('dddd, MMMM D, ha');
        document.getElementById('date3').textContent = formatDate3;
        let icon3 = data.list[21].weather[0].icon;
        console.log(icon3);
        document.getElementById('icon3').src = `http://openweathermap.org/img/wn/${icon3}@2x.png`
        document.getElementById('temp3').textContent = data.list[21].main.temp;
        document.getElementById('wind3').textContent = data.list[21].wind.speed;
        document.getElementById('hum3').textContent = data.list[21].main.humidity;
        //day4
        let getDate4 = data.list[29].dt_txt;
        let formatDate4 = dayjs(getDate4).format('dddd, MMMM D, ha');
        document.getElementById('date4').textContent = formatDate4;
        let icon4 = data.list[29].weather[0].icon;
        document.getElementById('icon4').src = `http://openweathermap.org/img/wn/${icon4}@2x.png`
        document.getElementById('temp4').textContent = data.list[29].main.temp;
        document.getElementById('wind4').textContent = data.list[29].wind.speed;
        document.getElementById('hum4').textContent = data.list[29].main.humidity;
        //day 5
        let getDate5 = data.list[37].dt_txt;
        let formatDate5 = dayjs(getDate5).format('dddd, MMMM D, ha');
        document.getElementById('date5').textContent = formatDate5;
        let icon5 = data.list[37].weather[0].icon;
        document.getElementById('icon5').src = `http://openweathermap.org/img/wn/${icon5}@2x.png`
        document.getElementById('temp5').textContent = data.list[37].main.temp;
        document.getElementById('wind5').textContent = data.list[37].wind.speed;
        document.getElementById('hum5').textContent = data.list[37].main.humidity;

    })
}
function getUV(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/uvi?&lat=${lat}&lon=${lon}&appid=${apiKey}`).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        let uvValue = data.value;
        JSON.parse(uvValue);
        document.getElementById('uv').textContent = uvValue;
        if (uvValue < 3) {
            document.querySelector("#uv").setAttribute("class", "mild")
        } if (3 < uvValue < 6) {
            document.querySelector("#uv").setAttribute("class", "moderate")
        } if (6 < uvValue < 8) {
            document.querySelector("#uv").setAttribute("class", "high")
        } if (8 < uvValue < 10) {
            document.querySelector("#uv").setAttribute("class", "very-high")
        } else {
            document.querySelector("#uv").setAttribute("class", "severe")
        }
    })
}
function todayWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        let localIcon = data.weather[0].icon;
        document.getElementById('temphigh').textContent = data.main.temp_max;
        document.getElementById('templow').textContent = data.main.temp_min;
        document.getElementById('currenticon').src = `http://openweathermap.org/img/wn/${localIcon}@2x.png`
        document.getElementById('wind').textContent = data.wind.speed;
        document.getElementById('hum').textContent = data.main.humidity; 
    });
}

//local storage of the user input


//create a span by the temp or it will be replaced 

//$(document).ready(function() {
   // M.updateTextFields();
  //});

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}