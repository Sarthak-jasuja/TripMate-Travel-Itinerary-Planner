import tripModel from "../models/TripModel.js";
import UserModel from "../models/userModel.js";

export const saveTrip = async (req, res) => {
  try {
    const { userId, destination, days, budget, travelers, hotels, itinerary } = req.body;

    // 1. Check if user exists
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    // 2. Create trip
    const newTrip = new TripModel({
      destination,
      days,
      budget,
      travelers,
      hotels,
      itinerary,
      user: userId
    });

    await newTrip.save();

    // 3. Link trip to user
    user.trips.push(newTrip._id);
    await user.save();

    res.json({ success: true, message: "Trip saved successfully", trip: newTrip });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
