const Review = require('../models/Review');
const mongoose = require('mongoose');

exports.getReviewsByProductId = async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.id });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addReview = async (req, res) => {
  try {
    const productId = new mongoose.Types.ObjectId(req.body.productId); // Ensure this is a valid ObjectId
    const newReview = new Review({
      productId: productId,
      user: req.body.user,
      rating: req.body.rating,
      comment: req.body.comment,
    });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error(error); // Log the error to the console
    res.status(400).json({ message: error.message });
  }
};
