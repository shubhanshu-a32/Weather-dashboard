const express = require('express');
const router = express.Router();

const {fetchCurrentWeather, fetchForecast} = require('../controllers/weatherController');
const {getFavourites,addFavourite, removeFavourite} = require('../controllers/favouriteController');

//Weather endpoints
router.get('/weather/current/:city', fetchCurrentWeather);
router.get('/weather/forecast/:city', fetchForecast);

//Favourite endpoints
router.get('/favourites', getFavourites);
router.post('/favourites', addFavourite);
router.delete('/favourites/:city', removeFavourite);

module.exports = router;