import { app } from "./app.js";
import {DB_connect} from "./Database/connectDB.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

DB_connect()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Started in Port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log(`Error while conecting Server : ${err}`);
  });
