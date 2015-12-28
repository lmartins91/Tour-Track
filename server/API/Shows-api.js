var express = require('express');
var db  = require('../db');
var Users = require('../models/Users');
var Shows = require('../models/Shows');
var ph = require('../models/Phish').Phishin();

var router = module.exports = express.Router();



router.get('/', function (req, res, next) {
    Shows.getAllShows().then(function(x) {
        res.send(x);
    })
})

router.get('/showId/:showId', function (req, res, next) {
    Shows.getShowById(req.params.showId).then(function(x) {
        res.send(x);
    })
})
router.get('/venueId/:venueId', function (req, res, next) {
    Shows.getShowsByVenueId(req.params.venueId).then(function(x) {
        res.send(x);
    })
})

router.get('/venues', function (req, res, next) {
    Shows.getAllShowsWithVenueInfo().then(function(x) {
        res.send(x);
    })
})

router.get('/venues/showId/:showId', function (req, res, next) {
    Shows.getShowWithVenueInfoById(req.params.showId).then(function(x) {
        res.send(x);
    })
})

router.get('/venues/tourId/:tourId', function (req, res, next) {
	Shows.getAllShowsWithVenueInfoByTourId(req.params.tourId).then(function(x) {
		res.send(x);
	})
})

router.get('/setlist/:showId', function (req, res, next) {
    Shows.getSetlist(req.params.showId).then(function(x) {
        res.send(x);
    })
})

// router.get('/venues/year/:year', function (req, res, next) {
// 	Shows.getAllShowsWithVenueInfoByYear(req.params.year).then(function(x) {
// 		res.send(x);
// 	})
// })

router.get('/venuesTours', function (req, res, next) {
    Shows.getAllShowsWithVenueTourInfo().then(function(x) {
        res.send(x);
    })
})