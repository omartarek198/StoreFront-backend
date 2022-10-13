import express from "express";
import { Request, Response } from "express";

import bodyParser from "body-parser";
import user_routes from "./handlers/users_routes";
import products_routes from "./handlers/products_routes";
import order_routes from "./handlers/orders_route";
const app: express.Application = express();
const address: string = "0.0.0.0:3000";
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", function requestHandler(req, res) {
  console.log("HMMM");
  res.end("bye, World!");
});

products_routes(app);
user_routes(app);
order_routes(app);
app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});
