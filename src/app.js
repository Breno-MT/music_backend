import express from "express";
import healthRouter from "./routes/health.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use("/api", healthRouter);
app.use("/user", userRouter);

export default app;
