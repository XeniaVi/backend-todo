import express from "express";
import mongoose from "mongoose";
import { config } from "./config/config.js";

const app = express();

console.log(config);

async function startApp() {
  try {
    mongoose.connect(config.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(config.PORT, () =>
      console.log(`Server started on port ${config.PORT}...`)
    );
  } catch (e) {
    console.log(e);
  }
}

startApp();
