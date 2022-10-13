import express, { Request, Response } from "express";

import { Order } from "../models/orders";
 

import jwt from "jsonwebtoken";


var order = new Order()
const index = async (_req: Request, res: Response) => {
  const all_orders = await order.index();

  res.json(all_orders);
};

const order_routes = (app: express.Application) => {
  app.get("/orders", index);
  app.get("/orders/show", showOrder);
    app.post("/orders/insert", insertOrder);
    app.post("/orders/AddToCart", AddToCart)

    app.delete("/products/delete", deleteProduct);
    
    app.get("/orders/:userid/showcurrent", getCurrentOrder)
};

const showOrder = async (_req: Request, res: Response) => {
     try {
    console.log(_req.body.token);

    console.log(_req.body.tst);
    await jwt.verify(_req.body.token, process.env.TOKEN_SECRET as string);
  } catch (err) {
    res.status(401);
    res.json(`invalid token ${err}`);

    return;
  }
  const id = Number(_req.query.id as string);

  try {
    const target_order = await order.show(id);
    res.json(target_order);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};

const insertOrder = async (_req: Request, res: Response) => {
  const order = new Order();

  try {
    console.log(_req.body.token);

    console.log(_req.body.tst);
    await jwt.verify(_req.body.token, process.env.TOKEN_SECRET as string);
  } catch (err) {
    res.status(401);
    res.json(`invalid token ${err}`);

    return;
    }
    

  const usr_id = Number( _req.query.userId) ;
   
  try {
     

    res.json(await order.insert(usr_id));
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};

const deleteProduct = async (_req: Request, res: Response) => {
  const order = new Order();

  const id = Number(_req.query.id as string);

  try {
    const deleted_product = await order.delete(id);
    res.json(deleted_product);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};




const AddToCart = async (_req: Request, res: Response) => {
  const order = new Order();

  try {
    console.log(_req.body.token);

    console.log(_req.body.tst);
      await jwt.verify(_req.body.token, process.env.TOKEN_SECRET as string);
      
  } catch (err) {
    res.status(401);
    res.json(`invalid token ${err}`);

    return;
    }
    

  const order_id = Number( _req.query.orderId) ;
   
    const product_id = Number(_req.query.productId);
    
  const quantity = Number( _req.query.quantity) ;
  try {
     

    res.json(await order.addToOrder(order_id,product_id,quantity));
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err);
  }
};


const getCurrentOrder =async(_req: Request, res: Response) => {
    console.log(_req.params.userid)
    const userid = Number (_req.params.userid)


    const order = new Order();
      res.json(await order.getCurrentOrders(userid));

}

 
export default order_routes;
