import express from "express";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongoDB/models/Post.js";

// Initial Configuration
dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Get all the posts
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

//Creates a Posts
router.route("/").post(async (req, res) => {
  try {
    // get the prompt, name & photo from body
    const { name, prompt, photo } = req.body;

    // Upload photo to the Cloudinary
    const photoURL = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoURL.url,
    });
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
});

export default router;
