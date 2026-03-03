import express from "express";
import type { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, resp: Response) => {
  resp.send("Hello World!");
});

app.post("/product", (req: Request, resp: Response) => {
  resp.status(201).json({
    success: true,
    data: req.body,
  });
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
