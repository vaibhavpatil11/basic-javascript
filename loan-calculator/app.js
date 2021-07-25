document.getElementById("loan-form").addEventListener("submit", (e) => {

    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculate, 2000);

    e.preventDefault();
});


function calculate() {
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");



    const monPayment = document.getElementById("monthly-payment");
    const totPayment = document.getElementById("total-payment");
    const totInterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;


    // compute monthly payments

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {

        monPayment.value = monthly.toFixed(2);
        totPayment.value = (monthly * calculatedPayments).toFixed(2);
        totInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';

    } else {

        showError("pls enter valid amount");

    }
}

function showError(error) {

    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

    const errorDiv = document.createElement("div");
    errorDiv.className = `alert alert-danger`;
    errorDiv.appendChild(document.createTextNode(error));
    document.querySelector('.card').insertBefore(errorDiv, document.querySelector('.heading'));
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}