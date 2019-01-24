var ui = {};

ui.navigation = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">BadBank</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"  onclick="loadLogin()">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"  onclick="loadDeposit()">Deposit</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"  onclick="loadWithdraw()">Withdraw</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"  onclick="loadTransactions()">Transactions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"  onclick="loadBalance()">Balance</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadAllData()">All Data</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
`;

ui.createAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Create Account</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter name" name="name">
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" name="password">
            </div>

            <button  class="btn primary" onclick="create();return false;">Create Account</button>
        </form>
    </div>
</div>
`;

ui.login = `
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Login</div>
    <div class="card-body">
        <form onSubmit="login();return false;">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" name="password">
            </div>

            <input type="submit" value="Login" class="btn primary">
        </form>
    </div>
</div> 
`;

ui.deposit = `
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">Deposit</div>
    <div class="card-body">
        <form  onSubmit="deposit();return false;">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>

            <div class="form-group">
                <label for="amount">Amount</label>
                <input type="number" class="form-control" id="amount" placeholder="Enter amount" name="amount">
            </div>

            <input type="submit" value="Deposit" class="btn primary">
        </form>
    </div>
</div>
`;

ui.withdraw = `
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">Withdraw</div>
    <div class="card-body">
        <form onSubmit="withdraw();return false;">
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>

            <div class="form-group">
                <label for="amount">Amount</label>
                <input type="number" class="form-control" id="amount" placeholder="Enter amount" name="amount">
            </div>

            <input type="submit" value="Submit" class="btn primary">
        </form>
    </div>
</div>
`;

ui.transactions = `

<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">Transactions</div>
    <div class="card-body">
        <form  onSubmit="transactions();return false;">
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>
            <input type="submit" value="Show Transactions" class="btn primary">
        </form>
        <div id="transactionsContainer">
            <table class="table">
                <thead><tr><td>Date</td><td>Amount</td><tr></thead>
                <tbody id="transactions"></tbody>
            </table>
        </div>
        
    </div>
</div>
`;

ui.balance = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Balance</div>
    <div class="card-body">
        <form onSubmit="balance();return false;">
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>
            <input type="submit" value="Show Balance" class="btn primary">

            <div id="balance"></div>
        </form>
    </div>
</div>
`;

ui.default = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">BadBank Landing Module</div>
    <div class="card-body">
        <h5 class="card-title">Welcome to the bank</h5>
        <p>
            You can move around using the navigation bar.
        </p>

        <i style="font-size: 8rem;" class="fab fa-amazon-pay"></i>
    </div>
</div>
`;

ui.allData = `
<h5>All Data in Store</h5>
<button class="btn btn-dark"  onClick="allData();return false;">Show all Data</button>

<div id="allData"></div>
`;

ui.alert = `
<div class="alert alert-info" role="alert" id="alertBox">
  
</div>
`
var target = document.getElementById('target');
var navigation = document.getElementById('navigation');
var alertContainer = document.getElementById('alertContainer');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function () {
    target.innerHTML = ui.createAccount;
};

var loadLogin = function () {
    target.innerHTML = ui.login;
};

var loadDeposit = function () {
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function () {
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function () {
    target.innerHTML = ui.transactions;
};

var loadBalance = function () {
    target.innerHTML = ui.balance;
};

var defaultModule = function () {
    target.innerHTML = ui.default;
};

var loadAllData = function () {
    target.innerHTML = ui.allData;
};

var setAlert = function (message) {
    alertContainer.innerHTML = ui.alert;

    var alertBox = document.getElementById("alertBox");

    alertBox.innerHTML = message;
}

defaultModule();
