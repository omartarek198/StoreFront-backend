



CREATE TABLE orders_products(
    id serial PRIMARY KEY,
    quantity integer,
    order_id BIGINT REFERENCES orders(id),
    product_id BIGINT REFERENCES products(id)

);