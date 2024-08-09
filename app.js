 //login button event handler

 const loginbtn = document.getElementById("login");
 loginbtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none" ;
     const transactionArea = document.getElementById("transaction-area")
     transactionArea.style.display = "block";
 })



 //deposit button evenr handler

 const depositBtn = document.getElementById("addDeposit");
 depositBtn.addEventListener("click", function(){
     // const depositAmmount = document.getElementById("depositAmmount").value;
     // const depositNumber = parseFloat(depositAmmount);

     const depositNumber = getInputNumber("depositAmmount");

     // const currentDeposit = document.getElementById("currentDeposit").innerText;
     // const currentDepositNumber = parseFloat(currentDeposit);
     // const totalDeposit = depositNumber +currentDepositNumber;
     // document.getElementById("currentDeposit").innerText = totalDeposit;

     updateSpanText("currentDeposit" , depositNumber);

     // const currentBalance = document.getElementById("currentBalance").innerText;
     // const currentBalanceNumber = parseFloat(currentBalance); 
     // const totalBalance = depositNumber + currentBalanceNumber;
     // document.getElementById("currentBalance").innerText = totalBalance;
      
     updateSpanText('currentBalance', depositNumber);

     document.getElementById("depositAmmount").value = "";

 })



 //withdraw button event handler


 const withdrawBtn = document.getElementById("addWithdraw");
 withdrawBtn.addEventListener("click" , function(){
     const withdrawNumber = getInputNumber("withdrawAmount");
     updateSpanText("currentWithdraw" , withdrawNumber);
     updateSpanText("currentBalance" , -1*withdrawNumber);
     document.getElementById("withdrawAmount").value = "";
 })


 //functions

 function updateSpanText(id , depositNumber){
     const current = document.getElementById(id).innerText;
     const currentNumber = parseFloat(current); 
     const totalBalance = depositNumber + currentNumber;
     document.getElementById(id).innerText = totalBalance;
 }

 function getInputNumber(id){
     const amount = document.getElementById(id).value;
     const amountNumber = parseFloat(amount);
     return amountNumber;
 }

 

