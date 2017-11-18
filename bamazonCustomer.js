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

let runningTotal = 0;

function runSearch() {
    inquirer
        .prompt({
            name: "item_id",
            type: "input",
            message: "Whats the ID?",

        }).then(function (answer) {
            var query = 'SELECT product_name FROM products WHERE ?';
            connection.query(query, {
                item_id: answer.item_id,
            }, function (err, res) {
                var answer1 = res[0].product_name;
                console.log("Item: " + res[0].product_name);
                itemQuan(answer1);

            });

        })
};

function itemQuan(answer1) {
    inquirer
        .prompt({
            name: "quantity",
            type: "input",
            message: "Sure thing, how many would you like?"
        }).then(function (ordered) {
            var query = "SELECT stock_quantity, price FROM products WHERE ?";
            connection.query(query, {
                product_name: answer1
            }, function (err, res) {
                var singlePrice = res[0].price;
                var stock = res[0].stock_quantity;
                console.log("ordered quantity: " + ordered.quantity);
                console.log(answer1 + " stock: " + stock)
                var difference = parseFloat(stock) - parseFloat(ordered.quantity);
                var currentTotal = parseFloat(singlePrice) * parseFloat(ordered.quantity);
                runningTotal += currentTotal;
                console.log("running total: " + runningTotal);
                if (ordered.quantity > stock) {
                    console.log("Insufficient quantity!");
                    runSearch();
                } else {
                    updateTable(difference, answer1);

                }
            });

        })
}

function updateTable(difference, answer1) {
    var query = "UPDATE products SET ? WHERE ?";
    connection.query(query, [{
            stock_quantity: difference
        },
        {
            product_name: answer1
        }
    ], function (err, res) {
        console.log("remaining " + answer1 + " stock: " + difference);
        anotherOrder();
    });

}

function anotherOrder() {
    inquirer
        .prompt({
            name: "runAgain",
            type: "list",
            message: "Anything else?",
            choices: [
                "Yes",
                "No"
            ]
        }).then(function (choice) {
            if (choice.runAgain === 'Yes') {
                console.log("picked yes");
                runSearch();
            } else {
                return console.log("That brings your total to $" + runningTotal + ", come again!")
            }
        });
}