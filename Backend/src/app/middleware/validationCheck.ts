import type { NextFunction, Request, Response } from "express";

export const validationCheck = (schema: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body = await schema.parseAsync(req.body);
        next();
    }
}