import express from "express";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

// Initial configurations
dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_DALLE_2_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Setting the route

router.route("/").get((req, res) => {
  res
    .status(200)
    .json({ msg: "This file does gives back the generated pictures" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

export default router;
