# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

## Products

#### TITLE: INDEX
#### VERB: `GET`
#### FUNCTIONALITY : Returns all products
#### PARAMS: 
#### TOKEN REQUIRED: no
#### URL: `http://127.0.0.1:3000/products`

#### TITLE: SHOW
#### VERB: `GET`
#### FUNCTIONALITY : Returns one product
#### PARAMS: id <int>
#### TOKEN REQUIRED: no
#### URL: `http://127.0.0.1:3000/products/show?id=1`
  
#### TITLE: CREATE
#### VERB: `POST`
#### FUNCTIONALITY : Creates one product
#### PARAMS: name <string> price <number> category <string>
#### TOKEN REQUIRED: Yes
#### URL: `http://127.0.0.1:3000/products/insert?name=p1&price=199&category=tech`
  
 
#### TITLE: FILTER
#### VERB: `GET`
#### FUNCTIONALITY : Returns products in category
#### PARAMS: category <string> 
#### TOKEN REQUIRED: no
#### URL: `http://127.0.0.1:3000/products/filter?category=tech`
  


## Users
  
#### TITLE: INDEX
#### VERB: `GET`
#### FUNCTIONALITY : Returns all users
#### PARAMS: 
#### TOKEN REQUIRED: no
#### URL: `http://127.0.0.1:3000/users/`
  
#### TITLE: SHOW
#### VERB: `GET`
#### FUNCTIONALITY : Returns one user
#### PARAMS: id <int>
#### TOKEN REQUIRED: Yes
#### URL: `http://127.0.0.1:3000/users/show?id=1`

    
#### TITLE: CREATE
#### VERB: `POST`
#### FUNCTIONALITY : CREATES ONE USER & returns token in response body
#### PARAMS: fn <string> ln <string> pwd <string>
#### TOKEN REQUIRED: no
#### URL: `http://127.0.0.1:3000/users/insert?fn=user&ln=123&pwd=1234`

## Orders
  
#### TITLE: OrdersByUser
#### VERB: `Get`
#### FUNCTIONALITY : Returns completed orders by user
#### PARAMS: userId <int>
#### TOKEN REQUIRED: Yes
#### URL: `http://127.0.0.1:3000/orders/:userId/showcurrent`


## Data Shapes
![image](https://user-images.githubusercontent.com/87566788/195713880-ad8fc816-3dd3-456e-943b-240b37fe6474.png)

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)