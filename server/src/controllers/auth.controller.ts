import { RequestHandler, RequestParamHandler } from "express";
import User from "../models/User";
import config from '../config'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUp: RequestHandler = async (req, res) => {
    try {
        const { username, email, password, roles } = req.body
        const newUser = new User({
            username,
            email,
            password: await bcrypt.hash(password, 10)
        })
        const savedUser = await newUser.save();

        const token = jwt.sign({id: savedUser._id},config.SECRET,{
            expiresIn: 600 //in seconds
        })

        return res.json({token})
    } catch (error) {
        console.log(error);

    }
}

export const signIn: RequestHandler = async (req, res) => {
    try {
        return res.json('signing in')
    } catch (error) {
        console.log(error);

    }
}