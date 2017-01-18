document.getElementById("addition_btn").addEventListener("click", function () {
    var value1 = document.getElementById("addition1").value;
    value1 = parseInt(value1);
    var value2 = document.getElementById("addition2").value;
    value2 = parseInt(value2);
    document.getElementById("addition_answer").textContent = (value1 + value2);
});

document.getElementById("subtraction_btn").addEventListener("click", function () {
    var value3 = document.getElementById("subtraction1").value;
    value3 = parseInt(value3);
    var value4 = document.getElementById("subtraction2").value;
    value4 = parseInt(value4);
    document.getElementById("subtraction_answer").textContent = (value3 - value4);
});

document.getElementById("mult_btn").addEventListener("click", function () {
    var value5 = document.getElementById("mult1").value;
    value5 = parseInt(value5);
    var value6 = document.getElementById("mult2").value;
    value6 = parseInt(value6);
    document.getElementById("mult_answer").textContent = (value5 * value6);
});