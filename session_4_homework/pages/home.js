import { Navbar } from "../components/home/navbar.js";

const navbar = new Navbar();

class Home {
  $container;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("main");
  }

  render = () => {
    this.$container.appendChild(navbar.render());
    return this.$container;
  };
}

export { Home };
