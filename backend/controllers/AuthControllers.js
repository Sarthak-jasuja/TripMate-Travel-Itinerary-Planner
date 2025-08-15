import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import usermodel from "../models/usermodel.js";
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
