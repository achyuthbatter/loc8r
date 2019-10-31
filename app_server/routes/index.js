const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Location page. */
router.get('/', ctrlLocations.homeList);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
    .route('/location/:locationid/review/new')
    .get(ctrlLocations.addReview)
    .post(ctrlLocations.doAddReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;