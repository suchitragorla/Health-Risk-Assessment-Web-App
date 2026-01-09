# 🩺 Health Risk Assessment Web App

## 📌 Objective
This project is a simple, rule-based Health Risk Assessment web application.  
It collects basic health inputs from the user, calculates Body Mass Index (BMI),  
classifies health risk, and provides relevant health recommendations.

---

## 🚀 Features
- Collects basic health information
- Calculates BMI using standard formula
- Classifies health risk (Low / Medium / High)
- Displays health recommendations
- Handles invalid or missing inputs
- Clean and responsive UI using Tailwind CSS

---

## 🧾 Inputs
- Age  
- Gender  
- Height (cm)  
- Weight (kg)  
- Known Health Condition:
  - None
  - Diabetes
  - Blood Pressure
  - Both

---

## 🧮 BMI Calculation
BMI is calculated using the formula:

```
BMI = weight (kg) / (height (m)²)
```

---

## ⚠️ Risk Classification Rules

### 1️⃣ BMI-Based Risk Levels

| BMI Range | Category | Risk Level |
|----------|----------|------------|
| < 16 | Severe Underweight | High Risk |
| 16 – 18.4 | Underweight | Medium Risk |
| 18.5 – 24.9 | Normal | Low Risk |
| 25 – 29.9 | Overweight | Medium Risk |
| ≥ 30 | Obese | High Risk |

---

### 2️⃣ Age Factor
- If **Age ≥ 45**, the risk level increases by one step:
  - Low → Medium
  - Medium → High

---

### 3️⃣ Existing Health Conditions

| Condition | Risk Impact |
|----------|------------|
| None | No change |
| Diabetes / Blood Pressure | Increase risk by one level |
| Both | Directly classified as High Risk |

> Final risk level is capped at **High Risk**.

---

## 🏥 Health Recommendations

### 🟢 Low Risk
- Maintain a balanced diet  
- Exercise at least 30 minutes daily  
- Regular health checkups  

### 🟡 Medium Risk
- Reduce sugar and processed food intake  
- Increase physical activity  
- Monitor BMI and health metrics  

### 🔴 High Risk
- Consult a healthcare professional  
- Follow a medically supervised diet  
- Regular monitoring of BP and glucose levels  

---

## ✅ Input Validation
The application validates:
- Missing input fields  
- Zero or negative height/weight values  
- Invalid age values  

Clear error messages are shown for invalid inputs.

---

## 🛠️ Technologies Used
- HTML  
- JavaScript  
- Tailwind CSS  

---

## 📂 Project Structure
```
health-risk-app/
│
├── index.html
├── script.js
└── README.md
```

---

## ▶️ Steps to Run the Project
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Open the project folder in VS Code  
3. Open `index.html` in any web browser  
4. Enter details and click **Assess Risk**

---

## 📌 Assumptions
- BMI is the primary health indicator  
- Gender does not directly affect risk calculation  
- Rule-based logic is used (no machine learning)  
- For educational purposes only  

---

## ⚠️ Known Limitations
- Not a medical diagnosis tool  
- Limited health parameters  
- No historical data tracking  

---

## 🔮 Future Enhancements
- Add numerical risk score (0–100)  
- Include more health indicators  
- Store user health history  
- Convert to React-based application  

---

## 📝 Disclaimer
This application is for informational purposes only and should not be considered medical advice.
