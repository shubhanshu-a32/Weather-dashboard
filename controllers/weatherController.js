const axios = require('axios');
const {baseUrl, apiKey} = require('../config/weatherAPI');

//Fetch current Weather data
const fetchCurrentWeather = async (req, res) => {
    const city = req.params.city;
    try {
        const url = `${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch(error) {
        res.status(404).json({message:"City not found or error fetching data"});
    }
};

//Fetch 5-day data
const fetchForecast = async (req, res) => {
    const city = req.params.city;
    try{
        const url = `${baseUrl}/forecast?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch(error) {
        res.status(404).json({message:"City not found or error fetching data"});
    }
};

module.exports = {fetchCurrentWeather, fetchForecast};