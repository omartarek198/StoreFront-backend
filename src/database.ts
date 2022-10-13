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

 
let client: Pool = new Pool();

if (ENVI === "dev") {

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

  client = new Pool({
    
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    
  });
}

export default client;
