import { InputGroup } from "./input-group.js";

class Register {
  $formRegister;
  $inputGroupUserName;
  $inputGroupEmail;
  $inputGroupPassword;
  $inputGroupConfirmPassword;
  $inputCheckBox;

  $spanCheckBox;
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

    this.$inputCheckBox = document.createElement("input");
    this.$inputCheckBox.classList.add("check-box");
    this.$inputCheckBox.type = "checkbox";

    this.$spanCheckBox = document.createElement("span");
    this.$spanCheckBox.innerHTML = "I agree to the terms & conditions";

    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.classList.add("submit-btn");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Register";
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const userName = this.$inputGroupUserName.getInputValue();
    const email = this.$inputGroupEmail.getInputValue();
    const password = this.$inputGroupPassword.getInputValue();
    const confirmPassword = this.$inputGroupConfirmPassword.getInputValue();

    this.$inputGroupUserName.setError(null);
    this.$inputGroupEmail.setError(null);
    this.$inputGroupPassword.setError(null);
    this.$inputGroupConfirmPassword.setError(null);

    if (!userName) {
      this.$inputGroupUserName.setError("User name cannot be empty !");
    }
    if (!email) {
      this.$inputGroupEmail.setError("Email cannot be empty !");
    }
    if (password.length < 6) {
      this.$inputGroupPassword.setError(
        "Password length must be greater or equal than 6 !"
      );
    }
    if (confirmPassword != password) {
      this.$inputGroupConfirmPassword.setError(
        "Confirm password not matched !"
      );
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
  };

  render = () => {
    this.$formRegister.appendChild(this.$feedbackMessage);
    this.$formRegister.appendChild(this.$inputGroupUserName.render());
    this.$formRegister.appendChild(this.$inputGroupEmail.render());
    this.$formRegister.appendChild(this.$inputGroupPassword.render());
    this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render());
    this.$formRegister.appendChild(this.$inputCheckBox);
    this.$formRegister.appendChild(this.$spanCheckBox);
    this.$formRegister.appendChild(this.$btnSubmit);
    return this.$formRegister;
  };
}

export { Register };
