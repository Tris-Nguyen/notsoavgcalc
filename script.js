// Average Calculator

// Event listener
document.getElementById("calc-btn").addEventListener("click", calcAverage);

// Event function
function calcAverage() {
  // Input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  // Process
  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 % num2;
  let power = num1 ** num2;
  let rounded = num1.toFixed(2);

  let degrees = num3;
  let radians = (degrees * Math.PI) / 180;

  let random = Math.random() * (num2 - num1) + num1;

  // Output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("sum-out").innerHTML = sum;
  document.getElementById("prod-out").innerHTML = product;
  document.getElementById("rem-out").innerHTML = remainder;
  document.getElementById("power").innerHTML = power;
  document.getElementById("rounded").innerHTML = rounded;
  document.getElementById("tangent").innerHTML = Math.tan(radians);
  document.getElementById("random").innerHTML = random;
}
