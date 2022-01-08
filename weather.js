
var key = config.KEY_SECOND;
var [latitude, longitude] = [34.052235, -118.243683];
const URL =  "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude +"&lon=" + longitude + "&appid=" + key ;

fetch(URL)
	.then(response => {
		return response.json();
	})
	.then(response => {
		console.log(response);
	})

