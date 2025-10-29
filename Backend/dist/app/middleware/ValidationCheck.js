export const validationCheck = (schema) => {
    return async (req, res, next) => {
        req.body = await schema.parseAsync(req.body);
        next();
    };
};
//# sourceMappingURL=validationCheck.js.map