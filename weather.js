
var key = config.KEY_SECOND;
const URL =  "api.openweathermap.org/data/2.5/weather?lat=34.052235&lon=-118.243683&appid=" + key + "";

fetch(URL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": key 
	}
})
.then(response => {
	console.log(response.body);
})
.catch(err => {
	console.error(err);
});