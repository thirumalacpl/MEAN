import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
    const token = jwt.sign(userId.toJSON(), process.env.JWT_SECRET_KEY, {
        expiresIn : "20h"
    })

    

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 10 * 24 *60 * 60 * 1000
    })
}

export default generateToken