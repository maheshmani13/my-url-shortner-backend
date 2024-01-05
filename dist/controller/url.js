import { nanoid } from "nanoid";
import { UrlModel } from "../models/Url.js";
export const NewUrlController = async (req, res) => {
    try {
        const { originial_url } = req.body;
        const url_string = nanoid(9);
        const urlEntry = await UrlModel.create({
            originial_url,
            url_string,
            clicks: [],
        });
        return res.status(200).send({
            success: true,
            message: urlEntry,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: error,
        });
    }
};
export const handleRedirectController = async (req, res) => {
    try {
        const url_string = req.params.id;
        const datenow = Date.now();
        const urlEntry = await UrlModel.findOneAndUpdate({ url_string }, {
            $push: { clicks: { datenow } },
        });
        if (!urlEntry) {
            throw new Error();
        }
        return res.redirect(urlEntry?.originial_url);
    }
    catch (error) {
        return;
    }
};
