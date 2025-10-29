import type { NextFunction, Request, Response } from "express";
type fn = (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const catchAsync: (fn: fn) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default catchAsync;
//# sourceMappingURL=catchAsync.d.ts.map