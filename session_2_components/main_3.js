import { InputGroup } from "./main_3_input_group.js";

const app = document.getElementById("app");

const usernameInput = new InputGroup("Username", "text");
const passwordInput = new InputGroup("Password", "password");

app.appendChild(usernameInput.render());
app.appendChild(passwordInput.render());

const btnSubmit = document.createElement("button");
btnSubmit.innerHTML = "Submit";
btnSubmit.addEventListener("click", () => {
  usernameInput.setSuccessMessage("Look good !");
  passwordInput.setErrorMessage("This field cannot be empty !");
});

app.appendChild(btnSubmit);
