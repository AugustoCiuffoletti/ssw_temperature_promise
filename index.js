// Import stylesheets
import "./style.css";

const apiKey = "d0fda39104b3c7c45fe031a5392964c1"
const URL = "https://api.openweathermap.org/data/2.5/weather?APPID=" + apiKey + "&units=metric&q="
var cityElems = document.getElementsByClassName("citta");
var t = 0;
for (let elem of cityElems) {
  elem.onclick = () => display(elem.innerHTML);
}
calcoloMedia.onclick = () => media();

function doCity(city, callback) {
  fetch(URL + city)
  .then(response => response.json())
  .then(data => callback(data));
}

function display(city) {
  doCity(city, data => {
    document.getElementById("risposta").innerHTML =
      "A " + city + " ci sono " + data.main.temp + " gradi";
  });
}

function media() {
  for (let city of cityElems) {
    doCity(city.innerHTML, data => {
      t += data.main.temp / cityElems.length;
      document.getElementById("media").innerText = t;
    });
  }
}