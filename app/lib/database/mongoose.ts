/* eslint-disable no-unused-vars */
import { connect, ConnectOptions, Mongoose, set } from "mongoose";

declare global {
  var mongoose: undefined | Mongoose;
  var __MONGO_URI__: string;
}

const opts: ConnectOptions = {};

async function setupMongoDb() {
  let MONGODB_URI = process.env.MONGODB_URI as string;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI for connection to mongo database."
    );
  }

  set("strictQuery", true);

  try {
    if (!(global as any).mongoose) {
      console.log("Creating new Mongoose Connection.");
      (global as any).mongoose = await connect(MONGODB_URI, opts);
    }
    console.log("Mongoose connected successfully.");
    return (global as any).mongoose;
  } catch (e: any) {
    console.log("Mongoose connection failed.");
    console.log(e?.message || e, ` || URI: ${MONGODB_URI}`);
    throw new Error(e?.message || e);
  }
}

export default setupMongoDb;
