function getAmount(){
    let startAmount = document.getElementById("startAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let years = document.getElementById("years").value;
    let compoundPeriod =  document.getElementById("compoundPeriod").value;

    if(check(startAmount, interestRate, years, compoundPeriod) == true){
        let finalAmount = calculateCompoundInterest(startAmount, interestRate, years, compoundPeriod);
        document.getElementById("finalAmount").value = finalAmount;
    } else {
        setTimeout(function(){
            location.reload();
        }, 3000);
    }
}

function calculateCompoundInterest(startAmount, interestRate, years, compoundPeriod) {
    let base = 1 + ((interestRate / 100) / compoundPeriod);    
    let finalAmount = startAmount * Math.pow(base, compoundPeriod * years);
    return roundTwoDecimals(finalAmount);
}

function check(startAmount, years, rate, compoundPeriod){
    if(startAmount === '' || rate === '' || years === '' || compoundPeriod === ''){
        document.getElementById("error").innerHTML = "Error! Please  make sure there is no empty field";
        return false;
    } else  if (startAmount <= 0 || rate <=0 || years <= 0 || compoundPeriod <= 0) {
        document.getElementById("error").innerHTML = "Error! Please  make sure all values greater than 0";
        return false;
    } 
        return true;
}

function roundTwoDecimals(number) {
    number = Math.round((number + Number.EPSILON) * 100) / 100;
    return number;
}