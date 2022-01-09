var key = config.KEY_SECOND;
var [latitude, longitude] = [34.052235, -118.243683];
const URL =  "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude +"&lon=" + longitude + "&appid=" + key ;


var today = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var [day, month, date] = [today.getDay(),today.getMonth(), today.getDate()];
day = days[day];
month = months[month];

const headingCity = document.getElementById("heading-city-name");
const dateInformation = document.getElementById("date-information");
const degreeInformation = document.getElementById("degree-information");

fetch(URL)
	.then(response => {
		return response.json();
	})
	.then(response => {
		console.log(response.name);
        headingCity.textContent = response.name;
        dateInformation.textContent = day + ", " + month + " " + date;
        degreeInformation.textContent = Math.floor(((response.main.temp - 273.15) * 9/5) + 32);

	})

/*
	 City                   response.name
    Day, Month Date         
    Degrees                 ((response.main.temp - 273.15) * 9/5) + 32
 
    Wind mph				response.wind.speed *  2.237
    Humidity %				response.main.humidity
    Pressure inches			response.main.pressure * 0.02953
    Cloud Cover %			response.clouds.all
    Visibility mi			response.visibility.value / 1609
*/

