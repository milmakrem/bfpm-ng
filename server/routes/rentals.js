const express = require('express');
const router = express.Router();
const Rental = require('../models/rentals');

router.get('', function (req, res){
    Rental.find({},function(err, foundRentals){
        res.json(foundRentals);
    });
    
});
router.get('/:id',function(req,res){
    const rentaId = req.params.id;
    Rental.findById(rentaId, function(err, foundRentals){
        if(err){
            res.status(422).send({error: [{title : 'Rental Error',details :'could not find Rental !'}]});
        }
        res.json(foundRentals);
    });
});

module.exports = router;