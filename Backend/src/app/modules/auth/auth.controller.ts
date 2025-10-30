import { response, type NextFunction, type Request, type Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import httpStatus from "http-status-codes";
import { AuthServices } from "./auth.services.js";

const login = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {

        const user = await AuthServices.login(req.body, res);

        // AuthServices may have already sent a response on error and returned null.
        if (!user) return;

        res.status(httpStatus.OK).json({
            status : "success",
            message : "user logged in successfully",
            user : user
        })
    }
)

export const AuthController = {
    login
}