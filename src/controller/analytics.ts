import { Request, Response } from "express";
import { UrlModel } from "../models/Url.js";
export const getNumberCLicksHandler = async (req: Request, res: Response) => {
  try {
    const url_string = req.params.id;
    if (!url_string) {
      throw new Error("Invalid url string");
    }
    const urlEntry = await UrlModel.findOne({ url_string });
    if (!urlEntry) {
      throw new Error("No our shortened Link");
    }

    return res.status(200).json({
      success: true,
      message: urlEntry?.clicks?.length || 0,
    });
  } catch (error) {
    console.log(error);
    return;
  }
};
