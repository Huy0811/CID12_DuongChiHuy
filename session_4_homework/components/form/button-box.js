import { Login } from "./login.js";
import { Register } from "./register.js";

class ButtonBox {
  $btnBox;
  $btn;
  $btnLogin;
  $btnRegister;

  constructor() {
    this.$btnBox = document.createElement("div");
    this.$btnBox.classList.add("button-box");

    this.$btn = document.createElement("div");
    this.$btn.setAttribute("id", "btn");

    this.$btnLogin = document.createElement("button");
    this.$btnLogin.classList.add("toggle-btn");
    this.$btnLogin.type = "button";
    this.$btnLogin.innerHTML = "Log In";
    this.$btnLogin.addEventListener("click", this.handleBtnLogin);

    this.$btnRegister = document.createElement("button");
    this.$btnRegister.classList.add("toggle-btn");
    this.$btnRegister.type = "button";
    this.$btnRegister.innerHTML = "Register";
    this.$btnRegister.addEventListener("click", this.handleBtnRegister);
  }

  handleBtnLogin = () => {
    let z = document.getElementById("btn");
    z.style.left = "0";

    let login = new Login();
    const form = document.getElementById("form-main");
    const inputRegisterGroup = document.getElementById("register");
    if (inputRegisterGroup) {
      form.removeChild(inputRegisterGroup);
      form.appendChild(login.render());
    }
  };

  handleBtnRegister = () => {
    let z = document.getElementById("btn");
    z.style.left = "110px";

    let register = new Register();
    const form = document.getElementById("form-main");
    const inputLoginGroup = document.getElementById("login");
    if (inputLoginGroup) {
      form.removeChild(inputLoginGroup);
      form.appendChild(register.render());
    }
  };

  render = () => {
    this.$btnBox.appendChild(this.$btn);
    this.$btnBox.appendChild(this.$btnLogin);
    this.$btnBox.appendChild(this.$btnRegister);
    return this.$btnBox;
  };
}

export { ButtonBox };
