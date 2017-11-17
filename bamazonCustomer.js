const mysql = require('mysql');
const inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});


function runSearch() {
    inquirer
        .prompt({
            name: "item_id",
            type: "input",
            message: "Whats the ID?",

        }).then(function (answer) {
            console.log(answer);
            var query = 'SELECT product_name FROM products WHERE ?';
            connection.query(query, {
                item_id: answer.item_id,
            }, function (err, res) {
                console.log("Item: " + res[0].product_name);
                quantity();

            });

        })
};

function quantity() {
    inquirer
        .prompt({
            name: "quantity",
            type: "input",
            message: "Sure thing, how many would you like?"
        }).then(function (answer) {
            var query = "SELECT stock_quantity FROM products WHERE ?";
            connection.query(query, {

            })
        })
}