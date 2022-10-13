import { Client } from "pg";
import client from "../database";
import dotenv from "dotenv";
dotenv.config();

export class User {
  firstname: string;
  lastname: string;
  pwd: string;

  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.pwd = "";
  }

  async index(): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get users:  ${err}`);
    }
  }

  async create(fn: string, ln: string, pwd: string): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO USERS(firstname, lastname,pwd) VALUES ('${fn}', '${ln}', '${pwd}') RETURNING *;`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  insert :  ${err}`);
    }
  }

  async show(id: number): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT  * FROM users
WHERE id=${id};
`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  show :  ${err}`);
    }
  }

  async update(fn: string, ln: string, pwd: string): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql =
        "UPDATE users SET firstname = $1, lastname = $2 , pwd = $3 RETURNING *";

      const result = await conn.query(sql, [fn, ln, pwd]);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  Update :  ${err}`);
    }
  }
  async delete(id: number): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = `DELETE  FROM users
WHERE id=${id}  RETURNING *;
`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  delete :  ${err}`);
    }
  }
}
