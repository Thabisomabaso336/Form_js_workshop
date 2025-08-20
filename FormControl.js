export default class FormControl {
  constructor(num, email, lastName) {
    this.num1 = num;
    this.email = email;
    this.lname = lastName;
    this.getName();
    this.numSpan = window.document.getElementById("error-message");
    this.emailSpan = window.document.getElementById("emailMessage");

  }
  submitHundler() {
    let isValid = true;
    
    if (isNaN(this.num1) || this.num1.trim() === "") {
      this.numSpan.textContent = "This is not a number";
      this.numSpan.hidden = false;
      this.numSpan.style.color = "red";
      isValid = false;
    } else {
      this.numSpan.textContent = "Valid number!";
      this.numSpan.hidden = false;
      this.numSpan.style.color = "red";
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.emailSpan.textContent = "Invalid email address";
      this.emailSpan.hidden = false;
      this.emailSpan.style.color = "red";
      isValid = false;
    } else {
      this.emailSpan.textContent = "Valid email!";
      this.emailSpan.hidden = false;
      this.emailSpan.style.color = "black";
    }
    return isValid;
  }
  getName() {
    localStorage.setItem("lastname", "Thabiso3");
  }

  static askForUserNameAndShowAlert(num1, email) {
    // ✅ Ask for name if not yet stored
    let userName = localStorage.getItem("userName");
    if (!userName) {
      userName = prompt("Please enter your name:");
      if (userName) {
        localStorage.setItem("userName", userName);
      }
    }
    alert(`Welcome ${userName}! Your number is ${num1} and your email is ${email}`);
  }

  static showStoredName() {
    let userName = localStorage.getItem("userName");
    if (userName) {
      document.getElementById("getName").innerText = `Hello ${userName}, what is your name`;
    }
  }
}