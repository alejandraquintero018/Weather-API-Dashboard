
//document.querySelector('#city').addEventListener

fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}`).then(function(res){
    return res.json();
}).then(function(data){
    console.log(data);
})


//$(document).ready(function() {
   // M.updateTextFields();
  //});

  //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}