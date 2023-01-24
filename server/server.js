import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongoDB/connectDB.js";
import dalleRoute from "./routes/dalleRoute.js";
import postRoute from "./routes/postRoutes.js";

// Initial setups
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoute);
app.use("/api/v1/post", postRoute);

// Calling Routes
app.get("/", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server-side for DALL-E 2.0, image generation tool.",
  });
});

// Initializing the server
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(
        `Server is listening on PORT: ${PORT}\nSERVER ON:- http://localhost:${PORT}`
      );
    });
  } catch (err) {
    console.log(err);
  }
};

// Starting the server
startServer();
