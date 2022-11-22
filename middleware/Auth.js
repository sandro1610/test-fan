import jwt from "jsonwebtoken";

export const auth = async(req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) res.sendStatus(401);
    try {
        await jwt.verify(token, "1234567890qwerty", (err) => {
            if (err) res.sendStatus(403);
            next();
        })
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}