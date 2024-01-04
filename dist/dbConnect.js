import mongoose from "mongoose";
export const dbConnect = (url) => {
    mongoose.connect(url);
};
