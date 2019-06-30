const router = require('express').Router();
const axios = require('axios');

module.exports = router;

router.get('/makes', async (req, res, next) => {
    try {
        const { data: makeResponse } = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
        const vehicleMakeNames = makeResponse.Results.map((vehicle) => vehicle.MakeName).sort();
        const response = ['--', ...vehicleMakeNames];

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
});

router.get('/:makeName', async (req, res, next) => {
    try {
        const { data: modelsResponse } = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${req.params.makeName.toLowerCase()}?format=json`);
        const modelsForMake = modelsResponse.Results.map((model) => model.Model_Name).sort();

        res.status(201).json(modelsForMake);
    } catch (error) {
        next(error);
    }
});
