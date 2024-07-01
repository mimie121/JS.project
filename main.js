// .Checked =  Property that determines 
//             the checked state of an
//             HTML checkbox or radio button element.
 


const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = ("You are Subscribed!");
    }
    else{
        subResult.textContent = ("You are NOT Subscribed!");
    }

    if(visaBtn.checked){
        paymentResult.textContent = ("You are paying with VISA!");
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = ("You are paying with MASTERCARD!");
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = ("You are paying with PAYPAL!");
    }

    else{
        paymentResult.textContent = ("You must select a payment Method!!!")
    }
}

//  Ternary Operators = A shortcut to if{} and else{} 
//                      statements, helps to assign a variable
//                       based on a condition 
                    //   condition ? codeIfTrue : codeIFfalse;

    let age = 22;
    let message = age >= 16 ? "You're an adult" : "You're a minor";
    console.log(message);

    let isStudent = true;
    let message2 = isStudent ? "You're a STUDENT" : "You're not a STUDENT";
    console.log(message2);

    let purchase = 129;
    let discount = purchase >= 100 ? 10 : 0;
    console.log(`Your total is $${purchase - purchase * (discount/100)}`);