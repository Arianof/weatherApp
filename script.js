let backGround = document.body.style.backgroundImage ;
let randomBackGround = ["./images/pexels-mathias-reding-13046522.jpg" ,"./images/pexels-maria-loznevaya-13415115.jpg" , "./images/pexels-kübra-arslaner-13386712.jpg"]
let res = randomBackGround[Math.floor(Math.random() * 3)]
backGround = "'" + res +"'"; 
let inpElem = document.getElementById('searchBar');
let button = document.querySelector('button');
let temp = document.getElementById('temp');
let weather = document.getElementById('weather');
let date = document.getElementById('date');
let city = document.getElementById('city');
let container = document.getElementById('container');
let max = document.getElementById('max');

let obj = {
 url : 'https://api.openweathermap.org/data/2.5/weather?q=',
 key : '9ff11531061bc6a0cea7fbdd13ca9ca0'
}

function fetchData(){
 let country = inpElem.value;
 fetch(`${obj.url}${country}&&appid=${obj.key}`).then(res => res.json()).then(data =>  
showData(data)) 
 
}
function showData(data){
 date.innerHTML = "" 
 temp.innerHTML = ""
 weather.innerHTML = ""
 max.innerHTML = ""
 city.innerHTML = ""
 container.style.paddingBottom += "250px";
 city.innerHTML = `${data.name},${data.sys.country}`;
 const his = new Date();
 date.innerHTML = his.toLocaleDateString();
 temp.innerHTML = `${(data.main.temp - 273).toFixed(2)} °C`;
 weather.innerHTML = `${data.weather[0].main}`; 
 max.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°C/${Math.floor(data.main.temp_max - 273.15)}°C`
}

inpElem.addEventListener("keypress" , event =>{
 if(event.keyCode === 13){
  fetchData();
 }
})