CREATE TABLE transactions
(
    id serial PRIMARY KEY,
    user_id VARCHAR (100) NOT NULL,
    order_name VARCHAR (100) NOT NULL,
    category VARCHAR (100) NOT NULL,
    description VARCHAR (200) NOT NULL,
    price NUMERIC (10, 2) NOT NULL,
    date BIGINT NOT NULL
);

INSERT INTO transactions (
    user_id,
    order_name,
    category,
    description,
    price,
    date
) 
VALUES (
    '1',
    'test order name',
    'test category',
    'test description',
    10.1,
    123124234
);
