import { ButtonBox } from "../components/form/button-box.js";
import { Login } from "../components/form/login.js";
import { Logo } from "../components/form/logo.js";
import { SocialIcon } from "../components/form/social-icon.js";

const logo = new Logo();
const btnBox = new ButtonBox();
const icon = new SocialIcon();
const login = new Login();

class Form {
  $container;
  $formBox;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("hero");

    this.$formBox = document.createElement("div");
    this.$formBox.classList.add("form-box");
    this.$formBox.setAttribute("id", "form-main");
  }

  render = () => {
    this.$container.appendChild(this.$formBox);
    this.$formBox.appendChild(logo.render());
    this.$formBox.appendChild(btnBox.render());
    this.$formBox.appendChild(icon.render());
    this.$formBox.appendChild(login.render());
    return this.$container;
  };
}

export { Form };
