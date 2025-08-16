import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import usermodel from "../models/userModel.js";
import transporter from "../config/nodemailer.js";
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password) {
        return res.json({ message: "All fields are required", success: false });
    }
    try {
        const existingUser = await usermodel.findOne({email})
        if(existingUser) {
            return res.json({ message: "User already exists", success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new usermodel({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET, {expiresIn: '7d'});
        res.cookie('token', token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        });
        const emailContent = {
            from: process.env.SENDER_EMAIL,
            to: newUser.email,
            subject: "Welcome to TripMate",
            text: `Hello ${name},\n\nThank you for registering with TripMate!\n\nYour account has been successfully created. You can now log in and start planning your trips.\n\nBest regards,\nTripMate Team`
        }
        await transporter.sendMail(emailContent);
        return res.json({ message: "Registration successful", success: true });

    }catch(error){
        res.json({ message: error.message, success: false });
    }
}
export const login = async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.json({ message: "All fields are required", success: false });
    }
    try {
        const user = await usermodel.findOne({email});
        if(!user) {
            return res.json({ message: "User not found", success: false });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.json({ message: "Invalid credentials", success: false });
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn: '7d'});
        res.cookie('token', token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        });
        return res.json({ message: "Login successful", success: true });
        
        
    } catch (error) {
        res.json({ message: error.message, success: false });
    }
}

export const logout = async (req, res) => {
    try{
        res.clearCookie('token',{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        return res.json({ message: "Logout successful", success: true });
    }
    catch (error) {
        res.json({ message: error.message, success: false });
    }
}
export const verifyOtp = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await usermodel.findById(userId);
        if (!user) {
            return res.json({ message: "User not found", success: false });
        }
        if (user.isverified) {
            return res.json({ message: "User already verified", success: false });
        }
        const otp = String(Math.floor(Math.random() * 9000000 + 1000000));
        user.verifyOtp = otp;
        user.verifyOtpExpiry = Date.now() + 10 * 60 * 1000;
        await user.save();
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Verify your TripMate account",
            text: `Hello ${user.name},\n\nYour OTP for verifying your TripMate account is ${otp}.\n\nThis OTP is valid for 10 minutes.\n\nBest regards,\nTripMate Team`
        };
        await transporter.sendMail(mailOptions);
        return res.json({ message: "OTP sent to your email", success: true });
    } catch (error) {
        return res.json({ message: error.message, success: false });
    }
}

export const verifyOtpHandler = async (req, res) => {
    const { userId, otp } = req.body;
    if(!userId || !otp) {
        return res.json({ message: "All fields are required", success: false });
    }
    try {
        const user = await usermodel.findById(userId);
        if(!user) {
            return res.json({ message: "User not found", success: false });
        }
        if(user.verifyOtp !== otp || !user.verifyOtp) {
            return res.json({ message: "Invalid OTP", success: false });
        }
        if(Date.now() > user.otpExpiry) {
            return res.json({ message: "OTP expired", success: false });
        }
        user.isverified = true;
        user.verifyOtp = "";
        user.verifyOtpExpiry = 0;
        await user.save();
        return res.json({ message: "User verified successfully", success: true });
    } catch (error) {
        return res.json({ message: error.message, success: false });
    }
}
export const isUserVerified = async (req, res) => {
    try{
        return res.json({ success: true });
    }catch (error) {
        return res.json({ message: error.message, success: false });
    }
}
export const resetPassword = async (req, res) => {
    const {email} = req.body;
    if(!email) {
        return res.json({ message: "Email is required", success: false });
    }
    try {
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.json({ message: "User not found", success: false });
        }
        const resendOtp = String(Math.floor(Math.random() * 9000000 + 1000000));
        user.resetOtp = resendOtp;
        user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000;
        await user.save();
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Password Reset OTP",
            text: `Hello ${user.name},\n\nYour OTP to reset your TripMate account password is ${resendOtp}.\n\nThis OTP is valid for 10 minutes.\n\nBest regards,\nTripMate Team`
        };
        await transporter.sendMail(mailOptions);
        return res.json({ message: "OTP sent to your email", success: true });
    }
    catch (error) {
        return res.json({ message: error.message, success: false });
    }
}
export const resetPasswordHandler = async (req, res) => {
    const {email, otp, newPassword} = req.body;
    if(!email || !otp || !newPassword) {
        return res.json({ message: "All fields are required", success: false });
    }
    try {
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.json({ message: "User not found", success: false });
        }
        if(!email || !otp || !newPassword) {
            return res.json({ message: "All fields are required", success: false });
        }
        if (user.resetOtp !== otp || user.resetOtp=="") {
            return res.json({ message: "Invalid OTP", success: false });
        }
        if(user.resetOtpExpireAt < Date.now()) {
            return res.json({ message: "OTP expired", success: false });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetOtp = "";
        user.resetOtpExpireAt = 0;
        await user.save();
        return res.json({ message: "Password reset successfully", success: true });
    }catch (error) {
        return res.json({ message: error.message, success: false });
    }
}