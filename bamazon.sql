DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;
CREATE TABLE products (
item_id INT NOT NULL auto_increment,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100)NULL,
price DECIMAL(10, 4) NULL,
stock_quantity INT NULL,
PRIMARY KEY(item_id)
);
 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUE (soda, grocery, 3.25, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUE (t-shrit, clothing, 15.30, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUE (hammer, hardware, 10.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUE (paint, hardware, 8.00, 65);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUE (candle, houseware, 5.00, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUE (cell-phone, electronics, 100.00, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUE (tv, electronics, 450.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUE (shoes, clothing, 25.00, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUE (chips, grocery, 5.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUE (beer, grocery, 9.50, 30);