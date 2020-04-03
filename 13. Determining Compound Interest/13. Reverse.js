function getInitialInvestment() {
    let target = document.getElementById("target").value;
    let years = document.getElementById("years").value;
    let interestRate = document.getElementById("interestRate").value;
    let compoundPeriod = document.getElementById("compoundPeriod").value;
    let initialInvestment = 0;
    let base = (1 + ((interestRate / 100) / compoundPeriod));
    event.preventDefault();

    checkValue(target, "the target amount");
    checkValue(years, "the number of years");
    checkValue(interestRate, " a rate of interest");
    checkValue(compoundPeriod, "a compound period");

    initialInvestment = target / (Math.pow(base, years * compoundPeriod));
    initialInvestment = roundTwoDecimals(initialInvestment);
    document.getElementById("initialInvestment").value = initialInvestment;

}

function checkValue(value, string) {
    if (value <= 0) {
        window.alert("please  enter " + string + " grater than 0");
        location.reload();
    } else if (value === '') {
        window.alert("There is no value for" + string);
    }
}

function roundTwoDecimals(number) {
    number = Math.round((number + Number.EPSILON) * 100) / 100;
    return number;
}