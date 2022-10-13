import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();
console.log("DEsV");

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  ENVI,
} = process.env;

console.log(process.env.ENVI)
console.log(ENVI)

console.log("process.env.ENVI")

let client: Pool = new Pool();

if (ENVI === "dev") {
      console.log("b");

  console.log(ENVI);
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  });
}
else {
  
}

if (ENVI === "test") {
    console.log("o");

  client = new Pool({
    
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    
  });
}

export default client;
