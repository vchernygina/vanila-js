const btnEl = document.getElementById("age-calculator");
const birthdayEl = document.getElementById("birthday-day");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);

/// tip colculator JS
const btnElTip = document.getElementById("tip-calculator");
const inputBill = document.getElementById("bill");
const inputTip = document.getElementById("tip");
const totalResult = document.getElementById("total-result");

function calculateTip() {
  const billValue = inputBill.value;
  const tipValue = inputTip.value;
  const totalValue = billValue * (1 + tipValue / 100);

  totalResult.innerText = totalValue.toFixed(2);

  console.log(totalValue);
}

btnElTip.addEventListener("click", calculateTip);
