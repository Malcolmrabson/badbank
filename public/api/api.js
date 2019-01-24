
function create() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    superagent
        .get(`/account/create/${name}/${email}/${password}`)
        .end(function (err, res) {
            if (err) {
                console.log(err);
            } else {
                setAlert("You are now registered.");
                console.log(res);
            }
        });
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    superagent
        .get(`/account/login/${email}/${password}`)
        .end(function (err, res) {
            if (err) {
                console.log(err.message);
                setAlert(err.message);
            } else {
                console.log(res);
                if (res.body.message) {
                    setAlert(res.body.message);
                } else {
                    setAlert("Login failed");
                }
            }
        });

    return false;
}

function deposit() {
    let email = document.getElementById("email").value;
    let amount = document.getElementById("amount").value;

    superagent
        .get(`/account/deposit/${email}/${amount}`)
        .end(function (err, res) {
            if (err) {
                console.log(err.message);
                setAlert(err.message);
            } else {
                console.log(res);
                if (res.body.message) {
                    setAlert(res.body.message);
                } else {
                    setAlert("Transaction failed");
                }
            }
        });

    return false;
}

function withdraw() {
    let email = document.getElementById("email").value;
    let amount = document.getElementById("amount").value;

    superagent
        .get(`/account/withdraw/${email}/${amount}`)
        .end(function (err, res) {
            if (err) {
                console.log(err.message);
                setAlert(err.message);
            } else {
                console.log(res);
                if (res.body.message) {
                    setAlert(res.body.message);
                } else {
                    setAlert("Withdrawal failed");
                }
            }
        });

    return false;
}

function transactions() {
    let email = document.getElementById("email").value;

    superagent
        .get(`/account/transactions/${email}`)
        .end(function (err, res) {
            if (err) {
                console.log(err.message);
                setAlert(err.message);
            } else {
                console.log(res);
                if (res.body) {
                    let rows = '';
                    res.body.forEach(transaction => {
                        rows += `<tr><td>${new Date(transaction.time).toDateString()}</td><td>${transaction.amount}</td></tr>`
                    });

                    document.getElementById("transactions").innerHTML = rows;
                } else {
                    setAlert("Error getting transactions");
                }
            }
        });

    return false;
}

function balance() {
    let email = document.getElementById("email").value;

    superagent
        .get(`/account/balance/${email}`)
        .end(function (err, res) {
            if (err) {
                console.log(err.message);
                setAlert(err.message);
            } else {
                console.log(res);
                if (res.body) {
                    document.getElementById("balance").innerHTML = `R ${res.body.balance}`;
                } else {
                    setAlert("Error getting balance");
                }
            }
        });

    return false;
}

function allData() {
    superagent
        .get(`/account/all`)
        .end(function (err, res) {
            if (err) {
                console.log(err.message);
                setAlert(err.message);
            } else {
                console.log(res);
                if (res.body.allData) {
                    document.getElementById("allData").innerHTML = JSON.stringify(res.body.allData);
                } else {
                    setAlert("Error getting all data.");
                }
            }
        });

    return false;
}