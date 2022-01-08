
var key = config.KEY_SECOND;
const URL =  "https://api.openweathermap.org/data/2.5/weather?lat=34.052235&lon=-118.243683&appid=" + key ;

fetch(URL)
	.then(response => {
		return response.json();
	})
	.then(response => {
		console.log(response);
	})

