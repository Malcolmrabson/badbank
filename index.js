// setup server
// YOUR CODE
var express = require('express');
var app = express();
var cors = require('cors');
var low = require('lowdb');
var fs = require('lowdb/adapters/FileSync');
var bodyParser = require('body-parser');
var adapter = new fs('db.json');
var db = low(adapter);

// setup directory used to serve static files
// YOUR CODE
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// setup data store
// YOUR CODE
db.defaults({ accounts: [] }).write();

// required data store structure
// YOUR CODE
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

app.listen(3001, function () {
    console.log("Listening on port 3000");
});

app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    // return success or failure string
    var record = {
        name: req.params.name,
        email: req.params.email,
        balance: 0,
        password: req.params.password,
        transactions: []
    };

    db.get('accounts')
        .push(record)
        .write()

    res.send(JSON.stringify(record));
});

app.get('/account/login/:email/:password', function (req, res) {

    let account = db.get('accounts')
        .find({
            email: req.params.email,
            password: req.params.password
        })
        .value();

    if (account) {
        res.send({ account: account, message: "You are now logged in" });
    } else {
        res.status = 404;
        res.send({ message: "User not found." });
    }
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string

    let transactions = db.get('accounts')
        .find({ email: req.params.email })
        .get('transactions')
        .value();

    let balance = db.get('accounts')
        .find({ email: req.params.email })
        .get('balance')
        .value();

    transactions.push({ time: Date.now(), amount: Number(req.params.amount) })
    balance += Number(req.params.amount);

    db.get('accounts')
        .find({ email: req.params.email })
        .assign({ transactions, balance })
        .write();

    res.send({ message: "Transaction successful." });

});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    let transactions = db.get('accounts')
        .find({ email: req.params.email })
        .get('transactions')
        .value();

    let balance = db.get('accounts')
        .find({ email: req.params.email })
        .get('balance')
        .value();

    transactions.push({ time: Date.now(), amount: Number(req.params.amount) * -1 })
    balance -= Number(req.params.amount);

    db.get('accounts')
        .find({ email: req.params.email })
        .assign({ transactions, balance })
        .write();

    res.send({ message: "Withdrawal successful." });
});

app.get('/account/transactions/:email', function (req, res) {

    let transactions = db.get('accounts')
        .find({ email: req.params.email })
        .get('transactions')
        .value();

    res.send(transactions);
});

app.get('/account/balance/:email', function (req, res) {

    let balance = db.get('accounts')
        .find({ email: req.params.email })
        .get('balance')
        .value();

    res.send({balance});
});

app.get('/account/all', function (req, res) {
    let allData = db.get('accounts').value();

    res.send({allData});

});
