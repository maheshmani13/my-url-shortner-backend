import express from "express";
import { getNumberCLicksHandler } from "../controller/analytics.js";
const app = express();
app.get("/clicks/:id", getNumberCLicksHandler);
export default app;
