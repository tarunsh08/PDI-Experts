import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const validateAdmin = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.user = user;
        next();
    });
}