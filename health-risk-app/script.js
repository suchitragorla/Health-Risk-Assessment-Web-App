function calculateRisk() {
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const condition = document.getElementById("condition").value;

  const resultDiv = document.getElementById("result");

  if (!age || !height || !weight || height <= 0 || weight <= 0) {
    resultDiv.innerHTML = "<p class='text-red-500'>Please enter valid inputs</p>";
    return;
  }

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(2);

  let risk = "Low Risk";

  if (bmi < 18.5 || bmi >= 25) risk = "Medium Risk";
  if (bmi >= 30) risk = "High Risk";

  if (age >= 45 && risk === "Low Risk") risk = "Medium Risk";
  else if (age >= 45 && risk === "Medium Risk") risk = "High Risk";

  if (condition === "diabetes" || condition === "bp") {
    if (risk === "Low Risk") risk = "Medium Risk";
    else risk = "High Risk";
  }

  if (condition === "both") risk = "High Risk";

  let advice = "";
  if (risk === "Low Risk")
    advice = "Maintain healthy lifestyle and regular exercise.";
  else if (risk === "Medium Risk")
    advice = "Improve diet, increase activity, monitor health.";
  else
    advice = "Consult a doctor and monitor health closely.";

  resultDiv.innerHTML = `
    <p><strong>BMI:</strong> ${bmi}</p>
    <p><strong>Risk Level:</strong> ${risk}</p>
    <p class="mt-2">${advice}</p>
  `;
}
