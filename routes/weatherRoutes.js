const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    const weatherData = await getWeatherByCity(city);


    if (weatherData) {
        res.json({
            city: city,
            temperature: weatherData.temperature,
            humidity: weatherData.humidity,
            description: weatherData.description,
        });
    } else {
        res.status(500).json({ error: 'Weather data could not be fetched.' });
    }
});

module.exports = router;