import express from "express";
import mongoose from "mongoose";
import router from "./routers/router";
// import { config } from "./config/config.js";
import cors from "cors";
// import { ErrorWrongData } from "./errors/errors.js";
// import { typeErrors } from "./constants/constants.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
// app.use(
//   (
//     err: Error,
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     if (err instanceof ErrorWrongData) {
//       const response = {
//         status: typeErrors.CLIENT_ERROR,
//         message: err.message,
//       };
//       res.status(typeErrors.CLIENT_ERROR).json(response);
//     } else {
//       const response = {
//         status: typeErrors.INTERNAL_SERVER_ERROR,
//         message: "Server Error",
//       };
//       res.status(typeErrors.INTERNAL_SERVER_ERROR).json(response);
//       next();
//     }
//   }
// );

async function startApp() {
  try {
    // mongoose.connect(config.DB_URL, {
    //   //useUnifiedTopology: true,
    //   //useNewUrlParser: true,
    // });
    app.listen(3000, () => console.log(`Server started on port ${3000}...`));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

startApp();
