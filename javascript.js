var a, o, b;
// The event handler functions for the text boxes
function appleHandler() {
var number = document.orderForm.apples.value;
a = document.getElementById("a").value;
a =number * 0.59;
document.getElementById("a").value = parseFloat(a).toFixed(2);
}
function orangeHandler() {
var number = document.orderForm.oranges.value;
o = document.getElementById("o").value;
o = number * 0.49;
document.getElementById("o").value =parseFloat(o).toFixed(2);
}
function bananaHandler() {
var number = document.orderForm.bananas.value;
b = document.getElementById("b").value;
b=number * 0.39;
document.getElementById("b").value = parseFloat(b).toFixed(2);
}
// The event handler function to produce the total cost message
// when "submit" is clicked
function finish() {
document.getElementById("total").value = parseFloat(a + o + b + 50).toFixed(2);
}
