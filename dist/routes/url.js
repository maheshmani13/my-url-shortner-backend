import express from "express";
import { NewUrlController, handleRedirectController, } from "../controller/url.js";
const app = express.Router();
app.post("/new", NewUrlController);
app.get("/:id", handleRedirectController);
export default app;
