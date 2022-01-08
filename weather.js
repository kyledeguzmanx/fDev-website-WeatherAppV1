


var key = config.KEY_SECOND;
var [latitude, longitude] = [34.052235, -118.243683];
const URL =  "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude +"&lon=" + longitude + "&appid=" + key ;






fetch(URL)
	.then(response => {
		return response.json();
	})
	.then(response => {
		console.log(response.wind.speed *  2.237);
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

