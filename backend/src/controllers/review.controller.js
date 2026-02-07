import { addReview } from '../services/review.service.js'
export const postReview = async (req, res) => {
    const {hotelId} = req.params
    const {rating, comment} = req.body

    if (!hotelId) {
        return res.status(400).json({ message: "Hotel ID is required" })
    }

    if(!rating || !comment){
        return res.status(400).json({message: "Rating and comment required"})
    }

    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating must be between 1 and 5" })
    }

    try{
        const review = await addReview({
            userId: req.userId,
            hotelId,
            rating,
            comment
        })

        return res.status(201).json(review)
    } catch(err){
        if(err.message === "NOT_ALLOWED"){
            return res.status(403).json({message: "Only checked in users can review, or review already submitted"})
        }
        return res.status(500).json({message: "Failed to post review"})
    }
}