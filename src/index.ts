import express from "express";
import { dbConnect } from "./dbConnect.js";
import UrlRoute from "./routes/Url.js";
import cors from "cors";
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
dbConnect(
  "mongodb+srv://maheshmani223344:maheshmani12@cluster0.3nqf3of.mongodb.net/?retryWrites=true&w=majority"
);

app.use("/url", UrlRoute);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
