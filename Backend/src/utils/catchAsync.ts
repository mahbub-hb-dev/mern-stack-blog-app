import type { NextFunction, Request, Response } from "express"

type fn = (req: Request, res: Response, next: NextFunction) => Promise<void>

export const catchAsync = (fn : fn) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (err : any) {
            next(err);
        }
    }
}

export default catchAsync;