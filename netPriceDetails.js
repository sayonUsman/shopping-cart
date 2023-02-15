function decrease(previousQuantity, price) {
    let newQuantity = parseInt(previousQuantity) - 1;

    if (newQuantity < 0) {
        newQuantity = 0;
    }

    const totalPrice = parseFloat(price) * newQuantity;
    return [newQuantity, totalPrice];
}

function increase(previousQuantity, price) {
    const newQuantity = parseInt(previousQuantity) + 1;
    const totalPrice = parseFloat(price) * newQuantity;
    return [newQuantity, totalPrice];
}

function netPriceDetails(totalPhonePrice, totalCasePrice) {
    const subTotal = totalPhonePrice + totalCasePrice;
    const tax = (subTotal * 5 / 100);
    const total = subTotal + tax;
    return [subTotal, tax, total];
}

const phoneQuantity = document.getElementById('phone-quantity');
const phonePrice = document.getElementById('phone-price');
const caseQuantity = document.getElementById('case-quantity');
const casePrice = document.getElementById('case-price');
const subTotalPrice = document.getElementById('sub-total-price');
const totalTax = document.getElementById('total-tax');
const totalPrice = document.getElementById('total-price');

document.getElementById('decrease-phone-quantity').addEventListener('click', function() {
    const netQuantityAndPrice = decrease(phoneQuantity.value, 1199.00);
    phoneQuantity.value = netQuantityAndPrice[0];
    phonePrice.innerText = netQuantityAndPrice[1].toString() + '.00';
    const details = netPriceDetails(netQuantityAndPrice[1], parseInt(casePrice.innerText));
    subTotalPrice.innerText = details[0].toString() + '.00';
    totalTax.innerText = (details[1].toFixed(2)).toString();
    totalPrice.innerText = (details[2].toFixed(2)).toString(); 
});

document.getElementById('increase-phone-quantity').addEventListener('click', function() {
    const netQuantityAndPrice = increase(phoneQuantity.value, 1199.00);
    phoneQuantity.value = netQuantityAndPrice[0];
    phonePrice.innerText = netQuantityAndPrice[1].toString() + '.00';
    const details = netPriceDetails(netQuantityAndPrice[1], parseInt(casePrice.innerText));
    subTotalPrice.innerText = details[0].toString() + '.00';
    totalTax.innerText = (details[1].toFixed(2)).toString();
    totalPrice.innerText = (details[2].toFixed(2)).toString(); 
});

document.getElementById('decrease-case-quantity').addEventListener('click', function() {
    const netQuantityAndPrice = decrease(caseQuantity.value, 59.00);
    caseQuantity.value = netQuantityAndPrice[0];
    casePrice.innerText = netQuantityAndPrice[1].toString() + '.00';
    const details = netPriceDetails(parseInt(phonePrice.innerText), netQuantityAndPrice[1]);
    subTotalPrice.innerText = details[0].toString() + '.00';
    totalTax.innerText = (details[1].toFixed(2)).toString();
    totalPrice.innerText = (details[2].toFixed(2)).toString(); 
});

document.getElementById('increase-case-quantity').addEventListener('click', function() {
    const netQuantityAndPrice = increase(caseQuantity.value, 59.00);
    caseQuantity.value = netQuantityAndPrice[0];
    casePrice.innerText = netQuantityAndPrice[1].toString() + '.00';
    const details = netPriceDetails(parseInt(phonePrice.innerText), netQuantityAndPrice[1]);
    subTotalPrice.innerText = details[0].toString() + '.00';
    totalTax.innerText = (details[1].toFixed(2)).toString();
    totalPrice.innerText = (details[2].toFixed(2)).toString(); 
});