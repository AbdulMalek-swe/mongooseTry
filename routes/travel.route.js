const router = require('express').Router();
const  tour= require('../controller/tour.controller');

router
 .route('/tours')
 .get(tour.getTour)
 .post(tour.createTour)
 
 module.exports = router