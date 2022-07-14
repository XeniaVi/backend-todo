import dotenv from "dotenv";

dotenv.config();

export const config = {
  DB_URL: process.env.DB_URL || "localhost",
  PORT: process.env.PORT || 3000,
  SECRET_KEY: process.env.SECRET_KEY,
};
