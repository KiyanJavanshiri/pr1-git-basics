import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.APP_PORT || 5000;

app.get("/", (req: Request, resp: Response) => {
  resp.send("Hello World!");
});

app.post("/product", (req: Request, resp: Response) => {
  resp.status(201).json({
    success: true,
    data: req.body,
  });
});

app.listen(PORT, () => {
  console.log("server is running at port 3000");
});
