//Weather api thing

//it takes the weather from two predefined places and compares the temperature, then returns the difference

var temperatures = [];
//var axios = require("axios");

async function getWeather(cityID) {
  try {
    var weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=f450213bfcc35c2d13c216190ef65aca&units=metric`);

    //console.log(weather);
    var temp = weather && weather.data && weather.data.main && weather.data.main.temp;
    var name = weather && weather.data && weather.data.name;
     if (!temp) {
       throw "Could not find temperature"
     }
     temperatures.push({
       id: cityID,
       name: name,
       temp: temp
     });
  } catch (e) {
    console.log(e);
  };
};

async function run() {
  await getWeather(2953317);

  await getWeather(2656666);

  var diffTemp = temperatures[1].temp - temperatures [0].temp
  diffTemp = diffTemp.toFixed(1);
  var temp1 = temperatures[0].temp.toFixed(1);
  var temp2 = temperatures[1].temp.toFixed(1);

  if (diffTemp < 0) {
    var tempMsg = "The temperature in " + temperatures[0].name + " is " + temp1 + "°C.";
    var diffMsg = " It is " + diffTemp + " degrees colder in " + temperatures[1].name + " than in " + temperatures[0].name + " :("
  } else if (diffTemp == 0) {
    var tempMsg = "The temperature in " + temperatures[0].name + " is " + temp1 + "°C.";
    var diffMsg = "It is the same temperature as in Bacup!"
  } else {
    var tempMsg =  "The temperature in " + temperatures[0].name + " is " + temp1 + "°C.";
    var diffMsg = " It is " + diffTemp + " degrees warmer in " + temperatures[1].name + " than in " + temperatures[0].name + " :)"
  }

  console.log(tempMsg);

  document.getElementById("weather").innerHTML = tempMsg
  document.getElementById("whatever").innerHTML = diffMsg
}

run();
