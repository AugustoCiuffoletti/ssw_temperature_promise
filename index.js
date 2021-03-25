// Import stylesheets
import "./style.css";

const apiKey = "9bd419b49d4261031516ad5fddac3439";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
var cityElems = document.getElementsByClassName("citta");
for (let elem of cityElems) {
  elem.onclick = () => display(elem.innerHTML);
}
document.getElementById("calcoloMedia").onclick = () => media();

function doCity(city, callback) {
  let promise = fetch(URL + city)
    .then(response => response.json(), error => alert(error))
    .then(data => callback(data));
  return promise;
}
function display(city) {
  doCity(city, data => {
    document.getElementById("risposta").innerHTML =
      "A " + city + " ci sono " + data.main.temp + " gradi";
  });
}
function media() {
  let media = 0;
  for (let city of cityElems) {
    doCity(city.innerHTML, data => data.main.temp).then(temp => {
      media += temp / cityElems.length;
      document.getElementById("media").innerText = media;
    });
  }
}
