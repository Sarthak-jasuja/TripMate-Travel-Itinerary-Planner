import usermodel from "../models/userModel.js";
export const getUserData = async (req, res) => {
    try{
        const {userId} = req.body;
        const user = await usermodel.findById(userId);
        if(!user) {
            return res.json({ message: "User not found", success: false });
        }res.json({ success: true, 
            userdata: {
                name: user.name,
                isverified: user.isverified 
            }
        })
    }catch(error) {
        return res.json({ message: error.message, success: false });
    }
}