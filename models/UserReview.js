import mongoose from "mongoose";

const userReviewSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
      trim: true,
      length: 50,
    },

    reviewTitle: {
      type: String,
      required: true,
      trim: true,
      length: 200,
    },

    rate: {
      type: Number,
      required: true,
      default: 0,
      length: 5,
    },
    message: {
      type: String,
      length: 300,
    },
  },
  {
    timestamps: true,
  }
);

const UserReview = mongoose.model("User Review", userReviewSchema);
export default UserReview;
