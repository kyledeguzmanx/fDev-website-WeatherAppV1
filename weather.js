var key = config.KEY_SECOND;
var [latitude, longitude] = [34.052235, -118.243683];
let URL =  "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude +"&lon=" + longitude + "&appid=" + key ;

/*
var zipcode = 91205;
const URL  =  "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "&appid=" + key ;
*/

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        URL =  "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude +"&lon=" + longitude + "&appid=" + key ;
        console.log(latitude,longitude,URL);
        displayData();
    });
}
else{
    displayData();
}

function displayData(){
    var today = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var [day, month, date] = [today.getDay(),today.getMonth(), today.getDate()];
day = days[day];
month = months[month];

const headingCity = document.getElementById("heading-city-name");
const dateInformation = document.getElementById("date-information");
const degreeInformation = document.getElementById("degree-information");
const descriptionInformation = document.getElementById("description-information");
const [highTemp,lowTemp] = [document.getElementById("high-information"),document.getElementById("low-information")];
const [windSpeed,humidity, cloudiness,pressure,visibilityValue] =[document.getElementById("wind-speed"),document.getElementById("humidity"),document.getElementById("cloudiness"),document.getElementById("pressure"),document.getElementById("visibility-value")];

fetch(URL)
	.then(response => {
		return response.json();
	})
	.then(response => {
		console.log(response.name);
        headingCity.textContent = response.name;
        dateInformation.textContent = day + ", " + month + " " + date;
        degreeInformation.textContent = Math.floor(((response.main.temp - 273.15) * 9/5) + 32);

        let description = response.weather[0].description;
        /*if(description.charAt(description.length-1) != "y"){
            description += "y";

            //haze, few clouds, 
        }*/
        descriptionInformation.textContent = description.charAt(0).toUpperCase() + description.slice(1);

        
        highTemp.textContent = "High: " + Math.floor(((response.main.temp_max - 273.15) * 9/5) + 32);
        lowTemp.textContent = " Low: " + Math.floor(((response.main.temp_min - 273.15) * 9/5) + 32);
        windSpeed.textContent = "Wind: " +  response.wind.speed *  2.237 + " mph";
        humidity.textContent = "Humidity " + response.main.humidity + "%";
        cloudiness.textContent = "Cloudiness " + response.clouds.all + "%";
        pressure.textContent = "Pressure " + (response.main.pressure * 0.02953).toFixed(1) + " in";
        visibilityValue.textContent = "Visibility " + (response.visibility / 1609).toFixed(1) + " mi";
        
	})
    .catch (err => {
        headingCity.textContent = "Los Angeles(ERROR)";
        dateInformation.textContent = "Thursday" + ", " + "January" + " " + "13";
        degreeInformation.textContent = "63";

        let description = "Clear Sky";
        /*if(description.charAt(description.length-1) != "y"){
            description += "y";

            //haze, few clouds, 
        }*/
        
        highTemp.textContent = "High: 103";
        lowTemp.textContent = " Low: 57";
        windSpeed.textContent = "Wind: 0 mph";
        humidity.textContent = "Humidity 44%";
        cloudiness.textContent = "Cloudiness 20%";
        pressure.textContent = "Pressure 30.2 in";
        visibilityValue.textContent = "Visibility 6.2 mi";
    })

}



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

