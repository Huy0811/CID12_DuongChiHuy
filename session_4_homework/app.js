let currentScreen = null;
const app = document.getElementById("app");

const setScreen = (screen) => {
  if (currentScreen) {
    app.removeChild(currentScreen);
  }

  currentScreen = app.appendChild(screen.render());
};

const setError = (input, message) => {
  const box = input.parentElement;
  const small = box.querySelector("small");
  box.className = "box error";
  small.innerText = message;
};

const setSuccess = (input) => {
  const box = input.parentElement;
  box.className = "box success";
};

const checkEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

export { setScreen, setError, setSuccess, checkEmail };
