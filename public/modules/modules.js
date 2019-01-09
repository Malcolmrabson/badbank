var ui = {};

ui.navigation = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Create Account</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Deposit</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Withdraw</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Transactions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Balance</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">All Data</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
`;

ui.createAccount = `
    <!-- ------------- YOUR CODE: Create Account UI ------------- --> 
`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> 
`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
`;

var target = document.getElementById('target');
var navigation = document.getElementById('navigation');
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

defaultModule();
