import express, { Request, Response, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import { todoRouter, authRouter } from "./routers";
import { config } from "./config/config";
import cors from "cors";
import { ErrorWrongData } from "./errors";
import { typeErrors } from "./constants";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", todoRouter);
app.use("/auth", authRouter);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`=== [APPLICATION] ERROR: ${err.message} ===`);

  if (err instanceof ErrorWrongData) {
    const response = {
      status: typeErrors.CLIENT_ERROR,
      message: err.message,
    };
    res.status(typeErrors.CLIENT_ERROR).json(response);
  } else {
    const response = {
      status: typeErrors.INTERNAL_SERVER_ERROR,
      message: "Server Error",
    };
    res.status(typeErrors.INTERNAL_SERVER_ERROR).json(response);
    next();
  }
});

async function startApp() {
  try {
    mongoose.connect(config.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions);
    app.listen(config.PORT, () =>
      console.log(`Server started on port ${config.PORT}`)
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

startApp();
