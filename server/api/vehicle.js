const router = require('express').Router();
const axios = require('axios');

module.exports = router;

router.get('/makes', async (req, res, next) => {
    try {
        const { data: makeResponse } = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
        const vehicleMakeNames = makeResponse.Results.map((vehicle) => ({ id: vehicle.MakeId, makeName: vehicle.MakeName }))
        .sort((a, b) => {
            const modelA = a.makeName.toUpperCase();
            const modelB = b.makeName.toUpperCase();

            return modelA < modelB ? -1 : modelA > modelB ? 1 : 0;
        });
        const response = [{ id: 'placeholder', makeName: '--' }, ...vehicleMakeNames];

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
});

router.get('/:makeName', async (req, res, next) => {
    try {
        const { data: modelsResponse } = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${req.params.makeName.toLowerCase()}?format=json`);
        const modelsForMake = modelsResponse.Results.map((model) => ({ id: model.Make_ID, modelName: model.Model_Name }))
        .sort((a, b) => {
            const modelA = a.modelName.toUpperCase();
            const modelB = b.modelName.toUpperCase();

            return modelA < modelB ? -1 : modelA > modelB ? 1 : 0;
        });
        const response = [{ id: 'placeholder', modelName: '--' }, ...modelsForMake];

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
});

