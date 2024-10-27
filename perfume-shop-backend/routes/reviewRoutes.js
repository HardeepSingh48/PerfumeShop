const express = require('express');
const router = express.Router();
const { getReviewsByProductId, addReview } = require('../controllers/reviewController');

router.get('/:id', getReviewsByProductId);
router.post('/', addReview);

module.exports = router;
