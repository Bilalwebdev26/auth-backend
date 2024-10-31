import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const DB_connect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `DataBase connect Successfully : Host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Error in connect DataBase : ${error}`);
  }
};
//Project-Name : authenticationBackend
//cluster0 : auth
//username : bilalwdev26
//password : bilal9898