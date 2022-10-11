import { Client } from "pg";
import client from "../database";


export type User={
    id: number;
    firstname: string;
    lastname: string;
    pwd: string;
    
}


export class User_CRUD{
    async index(): Promise<User[]>{
        try {
            const conn = await client.connect()
        const sql = 'SELECT * FROM users'
        const result = await conn.query(sql)
            conn.release()
                 console.log(result.rows)
        return result.rows
        }
        catch (err)
        {
            throw new Error(`Cannot get users:  ${err}`)
        }
    }

  
          async insert(fn:string, ln:string,pwd:string): Promise<User[]>{
              try {
                  const conn = await client.connect()
                  const sql = `INSERT INTO USERS(firstname, lastname,pwd) VALUES ('${fn}', '${ln}', '${pwd} ') RETURNING *;`
                  const result = await conn.query(sql)
                  conn.release()

                  console.log(result.rows)
                  console.log(result.rows)


                  return result.rows;
              }
              catch (err) {
                  throw new Error(`Cannot  insert :  ${err}`)
              }
    }
 
    
}
