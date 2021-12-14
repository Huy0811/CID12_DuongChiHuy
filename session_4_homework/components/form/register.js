import { setError, setSuccess, checkEmail } from "../../app.js";
import { InputGroup } from "./input-group.js";

class Register {
  $formRegister;
  $inputGroupUserName;
  $inputGroupEmail;
  $inputGroupPassword;
  $inputGroupConfirmPassword;
  $feedbackMessage;
  $btnSubmit;

  constructor() {
    this.$formRegister = document.createElement("form");
    this.$formRegister.classList.add("input-group");
    this.$formRegister.setAttribute("id", "register");
    this.$formRegister.addEventListener("submit", this.handleSubmit);

    this.$inputGroupUserName = new InputGroup("text", "userName", "User Name");
    this.$inputGroupEmail = new InputGroup("email", "email", "Email");
    this.$inputGroupPassword = new InputGroup(
      "password",
      "password",
      "Password"
    );
    this.$inputGroupConfirmPassword = new InputGroup(
      "password",
      "confirmPassword",
      "Confirm Password"
    );

    this.$feedbackMessage = document.createElement("div");
    this.$feedbackMessage.classList.add("feedback");

    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.classList.add("submit-btn");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Register";
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    let isUserName = false;
    let isEmail = false;
    let isPassword = false;
    let isConfirmPassword = false;

    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const userNameValue = this.$inputGroupUserName.getInputValue();
    const emailValue = this.$inputGroupEmail.getInputValue();
    const passwordValue = this.$inputGroupPassword.getInputValue();
    const confirmPasswordValue =
      this.$inputGroupConfirmPassword.getInputValue();

    if (userNameValue.trim() === "") {
      setError(userName, "User name cannot be empty");
    } else {
      setSuccess(userName);
      isUserName = true;
    }

    if (emailValue.trim() === "") {
      setError(email, "Email cannot be empty");
    } else if (!checkEmail(emailValue)) {
      setError(email, "Not a valid email");
    } else {
      setSuccess(email);
      isEmail = true;
    }

    if (passwordValue.trim() === "") {
      setError(password, "Password cannot be empty");
    } else if (passwordValue.length <= 6) {
      setError(password, "Password length must be greater than 6");
    } else {
      setSuccess(password);
      isPassword = true;
    }

    if (confirmPasswordValue.trim() === "") {
      setError(confirmPassword, "Confirm password cannot be empty");
    } else if (passwordValue !== confirmPasswordValue) {
      setError(confirmPassword, "Password does not match");
    } else {
      setSuccess(confirmPassword);
      isConfirmPassword = true;
    }

    let flag = isUserName && isEmail && isPassword && isConfirmPassword;
    if (flag) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
          this.$feedbackMessage.innerHTML = "Register successfully !";
          firebase.auth().currentUser.sendEmailVerification();
          this.$inputGroupUserName.setInputValue("");
          this.$inputGroupEmail.setInputValue("");
          this.$inputGroupPassword.setInputValue("");
          this.$inputGroupConfirmPassword.setInputValue("");
        })
        .catch((error) => {
          this.$feedbackMessage.innerHTML = error.toString();
          console.log(error);
        });
    }
  };

  render = () => {
    this.$formRegister.appendChild(this.$feedbackMessage);
    this.$formRegister.appendChild(this.$inputGroupUserName.render());
    this.$formRegister.appendChild(this.$inputGroupEmail.render());
    this.$formRegister.appendChild(this.$inputGroupPassword.render());
    this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render());
    this.$formRegister.appendChild(this.$btnSubmit);
    return this.$formRegister;
  };
}

export { Register };
