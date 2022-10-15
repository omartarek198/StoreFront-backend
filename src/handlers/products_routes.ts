import express, { Request, Response } from "express";

import { Product } from "../models/products";

 
import { IsValidNumber } from "../utils";
import { IsValidString } from "../utils";

import { validate } from "../utils";
const products_crud = new Product();

const products_routes = (app: express.Application) => {
  app.get("/products", index);
  app.get("/products/show", showProduct);
  app.post("/products/insert", addProduct);

  app.get("/products/filter", getProductsByCat);
  app.delete("/products/delete", deleteProduct);
};

const index = async (_req: Request, res: Response) => {
  const all_products = await products_crud.index();

  res.json(all_products);
};

const showProduct = async (_req: Request, res: Response) => {
  const product = new Product();

  const id = Number(_req.query.id as string);
  if (!IsValidNumber(id)) {
    res.status(400);
    res.json("Invalid input");
    return;
  }
  try {
    const all_products = await product.show(id);
    res.json(all_products);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};

const addProduct = async (_req: Request, res: Response) => {
  const product = new Product();
  if (!validate(_req, res))
  {
    return;  
  }

  const name = _req.query.name as string;
  const category = _req.query.category as string;
  const price = Number(_req.query.price as string);
  if (
    !IsValidString(name) ||
    !IsValidString(category) ||
    !IsValidNumber(price)
  ) {
    res.status(400);
    res.json(`Invalid input`);

    return;
  }
  try {
    product.set(name, category, price);

    res.json(await product.create());
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};

const deleteProduct = async (_req: Request, res: Response) => {
  const product = new Product();

  const id = Number(_req.query.id as string);
  if (!IsValidNumber(id)) {
    res.status(400);
    res.json(`Invalid input`);

    return;
  }
  try {
    const deleted_product = await product.delete(id);
    res.json(deleted_product);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};

const getPopProducts = async (_req: Request, res: Response) => {
  const id = Number(_req.query.id as string);
  if (!IsValidNumber(id)) {
    res.status(400);
    res.json(`Invalid input`);

    return;
  }

  const pop_products = await products_crud.popular(id);

  res.json(pop_products);
};

const getProductsByCat = async (_req: Request, res: Response) => {
  const category = _req.query.category as string;

  if (!IsValidString(category)) {
    res.status(400);
    res.json(`Invalid input`);

    return;
  }

  try {
    const products = await products_crud.getByCateory(category);

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};
export default products_routes;
