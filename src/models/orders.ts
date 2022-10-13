import { Client } from "pg";
import client from "../database";
import { User } from "./users";

export class Order {
  prod_id: number;

  usr_id: number;
  status: number;

  constructor() {
    this.prod_id = 0;
    this.usr_id = 0;
    this.status = 0;
  }

  set(prod_id: number, usr_id: number, status: number): number {
    this.prod_id = prod_id;

    this.usr_id = usr_id;
    this.status = status;
    //valid
    return 1;
  }

  async insert(id: number): Promise<Order[]> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO ORDERS (user_id,status) VALUES (${id},${1}) RETURNING *;`;
      const result = await conn.query(sql);
      conn.release();

      console.log(result.rows);
      console.log(result.rows);

      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  insert :  ${err}`);
    }
  }

  async addToOrder(
    order_id: number,
    product_id: number,
    quantity: number
  ): Promise<Order[]> {
    try {
      console.log(product_id);
      console.log(quantity);
      console.log(order_id);

      const conn = await client.connect();
      const sql = `INSERT INTO ORDERS_PRODUCTS (quantity, order_id,product_id) VALUES (${quantity}, ${order_id}, ${product_id}) RETURNING *;`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  insert :  ${err}`);
    }
  }
  async index(): Promise<Order[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * FROM ORDERS;`;
      const result = await conn.query(sql);
      conn.release();

      console.log(result.rows);
      console.log(result.rows);

      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  select orders :  ${err}`);
    }
  }

  async show(usr_id: number): Promise<Order[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECCT FROM ORDERS where user_id = ${usr_id};`;
      const result = await conn.query(sql);
      conn.release();

      console.log(result.rows);
      console.log(result.rows);

      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  select orders :  ${err}`);
    }
  }

  async delete(id: number): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = `DELETE  FROM orders
WHERE id=${id};
`;
      const result = await conn.query(sql);
      conn.release();
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  delete :  ${err}`);
    }
  }

  async getCurrentOrders(usr_id: number): Promise<Order[]> {
    console.log(usr_id);
    console.log(usr_id);

    try {
      const conn = await client.connect();
      const sql = `
             SELECT * from ORDERS_PRODUCTS where order_id IN (            SELECT order_id FROM orders
WHERE id=${usr_id} AND status = ${1}
 );`;

      const result = await conn.query(sql);

      conn.release();
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  show :  ${err}`);
    }
  }
}
