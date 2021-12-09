import { InputGroup } from "./input-group.js";

class Login {
  $formLogin;
  $inputGroupEmail;
  $inputGroupPassword;
  $inputCheckBox;
  $spanCheckBox;
  $feedbackMessage;
  $btnSubmit;

  constructor() {
    this.$formLogin = document.createElement("form");
    this.$formLogin.addEventListener("submit", this.handleSubmit);
    this.$formLogin.classList.add("input-group");
    this.$formLogin.setAttribute("id", "login");

    this.$inputGroupEmail = new InputGroup("email", "email", "Enter Email");
    this.$inputGroupPassword = new InputGroup(
      "password",
      "password",
      "Enter Password"
    );

    this.$feedbackMessage = document.createElement("div");

    this.$inputCheckBox = document.createElement("input");
    this.$inputCheckBox.classList.add("check-box");
    this.$inputCheckBox.type = "checkbox";

    this.$spanCheckBox = document.createElement("span");
    this.$spanCheckBox.innerHTML = "Remember Password";

    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.classList.add("submit-btn");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Log in";
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const email = this.$inputGroupEmail.getInputValue();
    const password = this.$inputGroupPassword.getInputValue();

    this.$inputGroupEmail.setError(null);
    this.$inputGroupPassword.setError(null);

    if (!email) {
      this.$inputGroupEmail.setError("Email cannot be empty !");
    }
    if (!password) {
      this.$inputGroupPassword.setError("Password cannot be empty !");
    }
  };

  render = () => {
    this.$formLogin.appendChild(this.$inputGroupEmail.render());
    this.$formLogin.appendChild(this.$inputGroupPassword.render());
    this.$formLogin.appendChild(this.$inputCheckBox);
    this.$formLogin.appendChild(this.$spanCheckBox);
    this.$formLogin.appendChild(this.$btnSubmit);

    return this.$formLogin;
  };
}

export { Login };
