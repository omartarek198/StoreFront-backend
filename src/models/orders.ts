import { Client } from "pg";
import client from "../database";
import { User } from "./users";


export class Order{
     prod_id: number;
   
    usr_id: number
    status:number
 
  constructor() {
      this.prod_id = 0;
      this.usr_id = 0;
    this.status = 0;
  }

  set(  prod_id: number,
    usr_id: number,
    status:number): number {
    this.prod_id =prod_id;
  
      this.usr_id = usr_id;
      this.status = status;
    //valid
    return 1;
    }



    async insert(id:number): Promise<Order[]> {
   
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO ORDERS (user_id) VALUES (${id}) RETURNING *;`;
      const result = await conn.query(sql);
      conn.release();

      console.log(result.rows);
      console.log(result.rows);

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

  async show(usr_id:number): Promise<Order[]> {
   
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
      throw new Error(`Cannot  show :  ${err}`);
    }
  }
}