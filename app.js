import express from "express";
import routerApi from "./routes/index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API GrapeParcel_v1",
    description: "API del sistema de control de calidad de uvas Italia.",
  });
});

routerApi(app);

export default app;
