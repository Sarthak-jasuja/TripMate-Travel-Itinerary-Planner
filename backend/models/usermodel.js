import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    verifyOtp: {type: String, default: ''},
    verifyOtpExpiry: {type: Number, default: 0},
    isverified: {type: Boolean, default: false},
    resetotp: {type: String, default: ''},
    resetotpExpiry: {type: Number, default: 0},
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trip" }]
})
const usermodel =mongoose.models.user || mongoose.model("user", userSchema);
export default usermodel;