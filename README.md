# StoreFront-backend
## Installation
#### run `npm install` to download dependancies 
#### Create a new .env file in the root directory of your project folder with the following values
<<<<<<< HEAD
`POSTGRES_HOST=127.0.0.1 
=======
##### POSTGRES_HOST=127.0.0.1
 

POSTGRES_TEST_DB=storefront_test

POSTGRES_USER=storefront_user

POSTGRES_PASSWORD =1234

TOKEN_SECRET=omar123

BCRYPT_PASSWORD = secret123

SALT_ROUNDS=10

ENVI=dev 

#### in psql terminal create a new user `CREATE USER storefront_user WITH PASSWORD '1234';`

#### Create Dev database `CREATE DATABASE storefront_dev; `

#### Create Test database `CREATE DATABASE storefront_test;`

#### Grant privilegs to created user
`GRANT ALL PRIVILEGES ON DATABASE storefront_dev to storefront_user;`

`GRANT ALL PRIVILEGES ON DATABASE storefront_test to storefront_user;`

#### SERVER http://127.0.0.1:3000/
#### DB PORT: 5432 (default port)



## Scripts

#### Start server : `npm run start` 

#### run tests : `npm run test` 

