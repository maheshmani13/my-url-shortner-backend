import mongoose from "mongoose";
import { UrlType } from "../type.js";

const UrlSchema = new mongoose.Schema(
  {
    url_string: {
      type: "string",
      required: true,
      unique: true,
    },
    originial_url: {
      type: "string",
      required: true,
    },
    clicks: {
      type: [
        {
          clicketAt: "number",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export const UrlModel = mongoose.model("UrlModel", UrlSchema);
