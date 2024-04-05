const router = require('express').Router();
const {User, Farmer, Reviews, Produce} = require('../models/index');
const withAuth = require('../utils/auth');

router.post('/produce', async (req,res) => {
    try{
       const produceData = await Produce.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        availability: req.body.availability,
        filename: req.body.filename,
        farmerId: req.body.farmerId,
       });
       res.status(200).json(produceData)
    }catch (err){
       res.status(500).json(err)
    }
});

router.post('/farmer', async (req,res) => {
    try{
       const farmerData = await Farmer.create({
        farm_name: req.body.farm_name,
        description: req.body.description,
        location: req.body.location,
        user_id: req.body.user_id,
       });
       res.status(200).json(farmerData)
    }catch (err){
       res.status(500).json(err)
    }
});

module.exports = router