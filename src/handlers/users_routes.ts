import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { User } from "../models/users";
import jwt from "jsonwebtoken";
import { IsValidNumber } from "../utils";
import { IsValidString } from "../utils";
const usrs_crud = new User();

const user_routes = (app: express.Application) => {
  app.get("/users", index);

  app.get("/users/show", showUser);
  app.post("/users/insert", addUsr);
};

const index = async (_req: Request, res: Response) => {
  try {
    await jwt.verify(_req.body.token, process.env.TOKEN_SECRET as string);
  } catch (err) {
    res.status(401);
    res.json(`invalid token ${err}`);
    return;
  }

  const all_users = await usrs_crud.index();

  res.json(all_users);
};

const addUsr = async (_req: Request, res: Response) => {
  const fn = _req.query.fn as string;
  const ln = _req.query.ln as string;
  const pwd = _req.query.pwd as string;

  if (!IsValidString(fn) || !IsValidString(fn) || !IsValidString(pwd)) {
    res.status(400);
    res.json("Invalid input");
    return;
  }

  try {
    const added_usr = await usrs_crud.insert(fn, ln, pwd);
    var token = jwt.sign(
      { user: added_usr },
      process.env.TOKEN_SECRET as string
    );
    console.log(token);
    res.json(token);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};

const showUser = async (_req: Request, res: Response) => {
  try {
    console.log(_req.body.token);

    await jwt.verify(_req.body.token, process.env.TOKEN_SECRET as string);
  } catch (err) {
    res.status(401);
    res.json(`invalid token ${err}`);

    return;
  }

  const user = new User();

  const id = Number(_req.query.id as string);
  if (!IsValidNumber(id)) {
    res.status(400);
    res.json("Invalid id");
  }

  try {
    const target_user = await user.show(id);
    res.json(target_user);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};

export default user_routes;
