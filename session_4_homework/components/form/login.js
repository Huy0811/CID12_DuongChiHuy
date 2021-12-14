import { setError, setSuccess, checkEmail } from "../../app.js";
import { InputGroup } from "./input-group.js";

class Login {
  $formLogin;
  $inputGroupEmail;
  $inputGroupPassword;
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

    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.classList.add("submit-btn");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Log in";
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    let isEmail = false;
    let isPassword = false;

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailValue = this.$inputGroupEmail.getInputValue();
    const passwordValue = this.$inputGroupPassword.getInputValue();

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
    } else {
      setSuccess(password);
      isPassword = true;
    }

    let flag = isEmail && isPassword;
    if (flag) {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailValue, passwordValue)
        .then((userInfo) => {
          console.log(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render = () => {
    this.$formLogin.appendChild;
    this.$formLogin.appendChild(this.$inputGroupEmail.render());
    this.$formLogin.appendChild(this.$inputGroupPassword.render());
    this.$formLogin.appendChild(this.$btnSubmit);

    return this.$formLogin;
  };
}

export { Login };
