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
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
  };

  handleBtnRegister = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");

    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  };

  render = () => {
    this.$btnBox.appendChild(this.$btn);
    this.$btnBox.appendChild(this.$btnLogin);
    this.$btnBox.appendChild(this.$btnRegister);
    return this.$btnBox;
  };
}

export { ButtonBox };
