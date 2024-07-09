import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const createUser = async(req, res, next) => {
    const {name, email, password} = req.body;
    console.log(name, email, password);
    if(!name || !email || !password){
        res.status(400)
        const err = new Error("please provide name, email and password")
        return next(err)
    }
    if(password.length < 8){
        res.status(400)
        const err = new Error("Password must be atleast 8 characters")
        return next(err)
    }

    const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        res.status(400)
        const err = new Error("Invalid email address")
        return next(err)
    }
    res.send("ok")
};
const login = async() => {};
const logout = async() => {};
const getProfile = async() => {};
const updateProfile = async() => {};

export {createUser, login, logout, getProfile, updateProfile};