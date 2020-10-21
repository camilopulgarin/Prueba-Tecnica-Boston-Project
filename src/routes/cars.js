const express = require('express');
const router = express.Router();

const Cars = require('../models/Cars');

//Routes Cars
router.get('/', async(req, res) =>{
    const cars = await Cars.find()
    res.json(cars);
 });
 
 router.get('/:id', async(req, res) => {
     const cars = await Cars.findById(req.params.id);
     res.json(cars);
 });
 
 router.post('/', async (req, res) =>{
     const cars = new Cars(req.body);
     await cars.save();
     res.json({
         satus:'Car Saved'
     });
 });
 router.put('/:id', async(req, res) =>{
     await Cars.findByIdAndUpdate(req.params.id, req.body);
     res.json({
         status: 'Car Updated'
     });
 });
 router.delete('/:id', async(req, res) => {
     await Cars.findByIdAndRemove(req.params.id);
     res.json({
         status: 'Cars Deleted'
     });
 });

 module.exports = router;