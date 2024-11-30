function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var ans = parseInt(num1) + parseInt(num2);
    document.getElementById("ans").value = ans;
}

function calculateex() {
    var num1ex = document.getElementById("num1ex").value;
    var num2ex = document.getElementById("num2ex").value;
    var ansex = Math.pow(parseInt(num1ex),parseInt(num2ex));
    document.getElementById("ansex").value = ansex;
}