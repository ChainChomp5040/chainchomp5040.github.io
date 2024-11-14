function calculate() {
    console.log("Starting calculate"); 
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var ans = parseInt(num1) + parseInt(num2);
    document.getElementById("ans").value = ans;
    console.log(ans); 
}