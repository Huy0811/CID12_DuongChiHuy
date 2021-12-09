import { ButtonBox } from "./components/button-box.js";
import { Login } from "./components/login.js";
import { SocialIcon } from "./components/social-icon.js";
import { Register } from "./components/register.js";

const app = document.getElementById("app");

const btnBox = new ButtonBox();
const icon = new SocialIcon();
const login = new Login();
const register = new Register();

class Form {
  $hero;
  $formBox;

  constructor() {
    this.$hero = document.createElement("div");
    this.$hero.classList.add("hero");

    this.$formBox = document.createElement("div");
    this.$formBox.classList.add("form-box");
  }

  render = () => {
    this.$hero.appendChild(this.$formBox);
    this.$formBox.appendChild(btnBox.render());
    this.$formBox.appendChild(icon.render());
    this.$formBox.appendChild(login.render());
    this.$formBox.appendChild(register.render());

    return this.$hero;
  };
}

const form = new Form();

app.appendChild(form.render());
