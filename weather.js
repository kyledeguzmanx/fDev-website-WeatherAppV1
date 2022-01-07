
const URL =  "https://community-open-weather-map.p.rapidapi.com/weather?q=Los%20Angeles%2C%20USA&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml";
var key = config.MY_API_KEY;
fetch(URL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": key 
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});