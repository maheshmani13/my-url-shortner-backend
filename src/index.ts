import express from "express";
import { dbConnect } from "./dbConnect.js";
import UrlRoute from "./routes/Url.js";
import AnalyticsRoute from "./routes/Analytics.js";

import cors from "cors";
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
dbConnect(
  "mongodb+srv://maheshmani223344:maheshmani12@cluster0.3nqf3of.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

app.use("/analytics", AnalyticsRoute);

app.use("/url", UrlRoute);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
