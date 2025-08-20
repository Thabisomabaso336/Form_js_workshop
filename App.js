import NumberWork from "./numberWork.js";
import FormControl from "./FormControl.js";


window.onload = () => {
  if (localStorage.getItem("username")) {
      alert("username found: " + localStorage.getItem("username"));
  } else {
      alert("No username found");
  }
};


window.setName = () => {
  const nameInput = document.getElementById("UserInput").value.trim();

  if (nameInput === "") {
    alert("Please enter your firstname");
    return;
  }


  localStorage.setItem("username", nameInput);
  alert("Name saved successfully: " + nameInput);
};


const num1 = new NumberWork(5);
num1.displayNumber();
num1.posOrNeg();

window.start = function (event) {
  event.preventDefault();
  const numInput = document.getElementById("num1").value;
  const emailInput = document.getElementById("email").value;

  const fc = new FormControl(numInput, emailInput);
  const result = fc.submitHundler();

  if (result) {
    alert("Success! Both inputs are valid.");
    console.log("Both number and email are valid");
  } else {
    console.log("One or both inputs are invalid");
  }
};
