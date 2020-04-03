function getAmount(){
    let startAmount = document.getElementById("startAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let years = document.getElementById("years").value;
    let finalAmount = 0;


    if(check(startAmount, interestRate, years) == true){
        finalAmount = calculateSimpleInterest(startAmount, interestRate, years); 
        document.getElementById("finalAmount").value = finalAmount; 
        displayYearlyAmount(startAmount, years, interestRate)                  
    } else{
        setTimeout(function() {
            location.reload();
        }, 5000);
    }

}

function calculateSimpleInterest(amount, rate, time) {
    let finalAmount = 0;
    finalAmount = amount * (1 + rate / 100 * time);
    return roundTwoDecimals(finalAmount); 
}

function check(startAmount, interestRate, years){
    if(startAmount === '' || interestRate === '' || years === ''){
        document.getElementById("error").innerHTML = "Error! Please  make sure there is no empty field";
        return false;;
    } else  if (startAmount <= 0 || interestRate <=0 || years <= 0) {
        document.getElementById("error").innerHTML = "Error! Please  make sure all values are greater than 0";
        return false;
    } 
        return true;
}

function roundTwoDecimals(number) {
    number = Math.round((number + Number.EPSILON) * 100) / 100;
    return number;
}

function displayYearlyAmount(startAmount, years, interestRate){
    for (var i = 1; i <= years; i++) {
        let temporalAmount = startAmount * (1 + interestRate / 100 * i);
        temporalAmount = roundTwoDecimals(temporalAmount);
        window.alert("After year " + i + " the final amount is: $" + temporalAmount);
    }
}
