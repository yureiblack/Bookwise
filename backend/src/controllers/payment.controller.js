import {initiatePayment, confirmPayment} from '../services/payment.service.js'
export const startPayment = async (req, res) => {
    const {bookingId, provider} = req.body

    if (!bookingId || !provider){
        return res.status(400).json({message: 'Booking ID and provider are required'})
    }

    try {
        const payment = await initiatePayment({bookingId, provider})
        return res.json({payment})
    } catch(err){
        if(err.message === "INVALID_BOOKING_STATE"){
            return res.status(400).json({message: "Booking not payable"})
        }
        if(err.message === "PAYMENT_ALREADY_INITIATED"){
            return res.status(400).json({message: "Payment already initiated for this booking"})
        }
        return res.status(500).json({message: 'Failed to initiate payment'})
    } 
}

export const paymentSuccess = async (req, res) => {
    const {bookingId, reference} = req.body
    
    if (!bookingId || !reference){
        return res.status(400).json({message: 'Booking ID and reference are required'})
    }

    try{
        await confirmPayment({bookingId, reference})
        return res.json({message: "Payment confirmed"})
    } catch{
        return res.status(500).json({message: "Payment confirmation failed"})
    }
}