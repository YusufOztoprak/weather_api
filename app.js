const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const weatherRoutes = require('./routes/weatherRoutes');
const port = process.env.PORT || 5000;
app.use(express.json());

app.use(express.json());
app.use(weatherRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});