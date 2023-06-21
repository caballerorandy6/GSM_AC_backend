import UserReview from "../models/UserReview.js";

//Creating Review
const createUserReview = async (req, res) => {
  const { fullName } = req.body;
  const userExists = await UserReview.findOne({ fullName });

  if (userExists) {
    const error = new Error("Sorry, no more reviews can be created!");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const userReview = new UserReview(req.body);
    const userReviewStored = await userReview.save();
    res.json(userReviewStored);
  } catch (error) {
    console.log(error);
  }
};

//Getting all Review
const getAllReviews = async (req, res) => {
  const reviews = await UserReview.find();
  res.json(reviews);
};

export { createUserReview, getAllReviews };
