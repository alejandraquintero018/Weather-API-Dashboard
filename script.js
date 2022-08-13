
document.querySelector('#city').addEventListener

fetch (`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`).then(function(res){
    return res.json();
}).then(function(data){
    console.log(data);
})
fetch()



$(document).ready(function() {
    M.updateTextFields();
  });