import type { Response } from "express";
import { User } from "../user/user.model.js";
import type { IAuth } from "./auth.interface.js"
import bcrypt, { hash } from "bcryptjs";

const login = async (payload : IAuth, res : Response) => {
    const {email, password} = payload;

    // Include password explicitly because schema has `select: false` for password
    const isUserExist = await User.findOne({email}).select("+password");

    if(!isUserExist) {
        res.status(400).json({
            status : "error",
            message : "email dosen't match"
        })
        // stop further execution since response already sent
        return null;
    }

    const isPasswordMatch = await bcrypt.compare(password, (isUserExist?.password as string));

    if(!isPasswordMatch) {
        res.status(400).json({
            status : "error",
            message : "password dosen't match"
        })
        // stop further execution since response already sent
        return null;
    }
    
    const loginUser = {
        name : isUserExist?.name,
        email : isUserExist?.email,
        avatar : isUserExist?.avatar,
        isVerified : isUserExist?.isVerified,
        isPremium : isUserExist?.isPremium
    }

    return loginUser;
}

export const AuthServices = {
    login
}