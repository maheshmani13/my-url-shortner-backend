import mongoose from "mongoose";

export const dbConnect = (url: string) => {
  mongoose.connect(url);
};
