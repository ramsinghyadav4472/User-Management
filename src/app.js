import express from "express";
import userRoutes from "./routes/user.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json()); //app level middleware

app.use("/api/users", userRoutes); //router level middleware

// Error handling middleware (must be last)
app.use(errorHandler);

export default app; 