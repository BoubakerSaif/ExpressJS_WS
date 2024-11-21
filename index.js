import express from "express";
import testRoutes from "./Routes/testRoutes.js";

const app = express();

app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

app.use(testRoutes);

app.listen(5000, () => {
  console.log("Server is running on Port 5000");
});
