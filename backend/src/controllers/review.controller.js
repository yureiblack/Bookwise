// review.controller.js
import { addReviewByBooking } from '../services/review.service.js';

export const postReview = async (req, res) => {
    const { bookingId } = req.body; 
    const { rating, comment } = req.body;

    if (!bookingId || !rating || !comment) {
        return res.status(400).json({ message: "Booking ID, rating, and comment are required" });
    }

    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating must be between 1 and 5" });
    }

    try {
        const review = await addReviewByBooking({
            bookingId,
            userId: req.userId,
            rating,
            comment
        });

        return res.status(201).json(review);
    } catch (err) {
        if (err.message === "NOT_ALLOWED") {
            return res.status(403).json({ message: "Booking not checked-in or review already submitted" });
        }
        return res.status(500).json({ message: "Failed to post review" });
    }
};
