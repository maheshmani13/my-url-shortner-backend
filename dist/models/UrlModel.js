import mongoose from "mongoose";
const UrlSchema = new mongoose.Schema({
    url_string: {
        type: "string",
        required: true,
    },
    originial_url: {
        type: "string",
        required: true,
    },
    clicks: {
        type: [
            {
                clicketAt: "Date",
            },
        ],
    },
}, {
    timestamps: true,
});
export const UrlModel = mongoose.model("UrlModel", UrlSchema);
