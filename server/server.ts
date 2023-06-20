import express, { Request, Response } from "express";
import next from "next";
import mysql from "mysql2";
const dev = process.env.NODE_ENV === "development";
const port = 3000;
const app = next({ dev, port });

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234", //Todo env
  database: "Post",
  port: 3306,
});

connection.connect();

connection.query("SELECT * FROM Posts", (err, rows, fields) => {
  if (err) throw err;

  console.log("Post is: ", rows);
});

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
