const router = require('express').Router();
const axios = require('axios');

module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const { data: carsResponse } = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
        const vehicleMakeNames = carsResponse.Results.map((vehicle) => vehicle.MakeName).sort();

        res.status(201).json(vehicleMakeNames);
    } catch (error) {
        next(error);
    }
});
