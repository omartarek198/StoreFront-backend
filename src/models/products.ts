import { Client } from "pg";
import client from "../database";

export class Product {
  name: string;
  price: number;
  category: string;

  constructor() {
    this.name = "";
    this.price = 0;
    this.category = "";
  }

  set(name: string, category: string, price: number): number {
    this.name = name;
    this.price = price;
    this.category = category;
    //valid
    return 1;
  }

  async index(): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products";
      const result = await conn.query(sql);
      conn.release();
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get products:  ${err}`);
    }
  }

  async create(): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO products(name, price,category) VALUES ('${this.name}', '${this.price}', '${this.category}') RETURNING *;`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  insert :  ${err}`);
    }
  }

  async show(id: number): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT  * FROM products
WHERE id=${id};
`;
      const result = await conn.query(sql);
      conn.release();
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  show :  ${err}`);
    }
  }

  async delete(id: number): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = `DELETE  FROM products
WHERE id=${id} RETURNING *;
`;
      const result = await conn.query(sql);
      conn.release();
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  show :  ${err}`);
    }
  }

  async popular(id: number): Promise<Product[] | null> {
    return null;
  }


 async update(id:number): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = "UPDATE products SET name = $1, price =$2,category = $3 WHERE id= $4 RETURNING *"



      const result = await conn.query(sql,[this.name,this.price,this.category,id]);
      conn.release();
     
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  Update :  ${err}`);
    }
  }
  async getByCateory(category: string): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT *  FROM products
            WHERE category='${category}';
`;
      const result = await conn.query(sql);
      conn.release();
      console.log(category);
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  show :  ${err}`);
    }
  }
}
