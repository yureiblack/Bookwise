import { addReview } from '../services/review.service.js'
export const postReview = async (req, res) => {
    const {hotelId} = req.params
    const {rating, comment} = req.body

    if(!rating || !comment){
        return res.status(400).json({message: "Rating and comment required"})
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
            return res.status(403).json({message: "Only checked in users can post review"})
        }
        return res.status(500).json({message: "Failed to post review"})
    }
}