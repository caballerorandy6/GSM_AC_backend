import express from "express";
import {
  createUserReview,
  getAllReviews,
} from "../controllers/userReviewController.js";

const router = express.Router();

router.post("/api/create-review", createUserReview);
router.get("/api/reviews", getAllReviews);

export default router;
