import express from "express";
import dotenv from "dotenv";
// import { PORT } from "./config.js";

dotenv.config();

const PORT = process.env.PORT

const app = express();


app.listen(PORT, () => {console.log(`app listening on port ${PORT}`)})