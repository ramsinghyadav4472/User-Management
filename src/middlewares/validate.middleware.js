import { ZodError } from "zod";

export const validate = (schema) => (req, res, next) => {
    try {
        req.body = schema.parse(req.body);
        next();
    } catch (error) {
        console.log("ZOD ERROR:", error);

        if (error instanceof ZodError) {
            return res.status(400).json({
                message: "Validation failed",
                error: error.issues,
            });
        }

        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

