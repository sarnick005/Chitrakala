import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening to PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB failed to connect!!! ", err);
  });
