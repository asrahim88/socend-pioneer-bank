//                   Login button event handler area

document.getElementById("logIn").addEventListener("click", function(e) {
    const inputEmail = document.getElementById("email").value;
    const inputPassword = document.getElementById("password").value;
    const logInArea = document.getElementById("login-area");


    if (inputEmail == '' || inputPassword == '') {
        alert('Please enter your email or password');
    } else {
        logInArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
    }

   
})

//                 deposit button event handler 

document.getElementById("depositButton").addEventListener("click", function(e) {
    const depositNumber = getInput('depositAmount');

   if (depositNumber > 0) {
    updateSpanTag('currentDeposit', depositNumber);
    updateSpanTag('currentBalance', depositNumber);
   } else {
       alert('input your posit amount or right amount')
   }
   document.getElementById("depositAmount").value = '';
})

//               withdraw Button  event handler

document.getElementById("withdrawButton").addEventListener("click", function(e) {
    const withdrawCurrentBalance = document.getElementById('currentBalance').innerText;
   const withdrawAmount = getInput('withdrawAmount');

   if (withdrawAmount > 0 && withdrawAmount <= withdrawCurrentBalance) {
    updateSpanTag('currentWithdraw', withdrawAmount);
    updateSpanTag('currentBalance', -1* withdrawAmount);
   } else {
       alert('input your posit amount or right amount')
   }
    document.getElementById("withdrawAmount").value = '';
})
function getInput(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanTag(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}