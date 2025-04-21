async function getWeather() {
    const city = document.getElementById("city").value;
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d4205b22fcmsha4b97686cf9f1cp10dd1ejsncdd5524c5d6d",  // Make sure this key is valid
        "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com"
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("City not found or API error");
  
      const data = await response.json();
  
      const result = `
        <p><strong>${data.name}</strong></p>
        <p>Temp: ${data.temp}°C</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Wind Speed: ${data.wind_speed} km/h</p>
      `;
  
      document.getElementById("result").innerHTML = result;
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("result").innerHTML = "Failed to fetch weather.";
    }
  }