document.getElementById("weatherForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = document.getElementById("cityInput").value;
    if (!city) return;
    
    // Fetch current weather
    try {
      const response = await fetch(`/api/weather/current/${city}`);
      if (!response.ok) {
        document.getElementById("weatherResult").innerHTML = `<p>Error: City not found.</p>`;
        return;
      }
      const data = await response.json();
      
      // Display data
      const html = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
      `;
      document.getElementById("weatherResult").innerHTML = html;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  });
  