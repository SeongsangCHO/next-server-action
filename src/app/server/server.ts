import express, { Request, Response } from "express";
import next from "next";
import { db } from "../lib/mysql";
const dev = process.env.NODE_ENV === "development";
const port = 3000;
const app = next({ dev, port });

db.connect();
console.log("DB connected");
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/getRequest", (req: Request, res: Response) => {
    console.log("hello");
  });

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    console.log("ready");
  });
});
