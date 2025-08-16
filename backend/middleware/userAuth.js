import jwt from "jsonwebtoken";
const userAuth = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.json({ message: "Authentication token is missing", success: false }); // <-- fix here
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            if (!req.body) req.body = {}; 
            req.body.userId = tokenDecode.id;
        } else {
            return res.json({ message: "Invalid token", success: false });
        }
        next();
    }
    catch (error) {
        return res.json({ message: error.message, success: false });
    }
}
export default userAuth;