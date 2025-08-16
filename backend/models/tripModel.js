import mongoose from "mongoose";

// Sub-schema for hotel details
const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  rating: { type: String, required: true },   // kept as String since AI outputs "4.3/5.0"
  price: { type: String, required: true }     // stored as String (AI returns ranges)
});

// Sub-schema for itinerary days
const itinerarySchema = new mongoose.Schema({
  day: { type: String, required: true },
  activities: [{ type: String, required: true }]
});

// Main Trip schema
const tripSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  days: { type: Number, required: true },
  budget: { type: String, required: true },
  travelers: { type: String, required: true },
  hotels: [hotelSchema],         
  itinerary: [itinerarySchema],  
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }
});

const TripModel = mongoose.models.Trip || mongoose.model("Trip", tripSchema);
export default TripModel;
