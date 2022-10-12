import { Client } from "pg";
import client from "../database";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";

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
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get users:  ${err}`);
    }
  }

  async insert(fn: string, ln: string, pwd: string): Promise<User[]> {
    const pepper = process.env.BCRYPT_PASSWORD;
    const hash = bcrypt.hashSync(
      pwd + pepper,
      parseInt(process.env.SALT_ROUNDS as string)
    );
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO USERS(firstname, lastname,pwd) VALUES ('${fn}', '${ln}', '${hash}') RETURNING *;`;
      const result = await conn.query(sql);
      conn.release();

      console.log(result.rows);
      console.log(result.rows);

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
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot  show :  ${err}`);
    }
  }
}
