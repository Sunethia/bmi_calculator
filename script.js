let btn = document.getElementById("btn");
let result = document.getElementById("bmi-output");

btn.addEventListener("click", () => {
  let weight = document.getElementById("weight-input").value;
  let height = document.getElementById("height-input").value;

  let finalBMI = (weight / (height * height)) * 10000;

  result.innerHTML = `Your BMI is ${finalBMI.toFixed(2)}`;
});
