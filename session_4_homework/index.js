import { setScreen } from "./app.js";
import { Form } from "./pages/form.js";
import { Home } from "./pages/home.js";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const home = new Home();
    setScreen(home);
  } else {
    const form = new Form();
    setScreen(form);
  }
});
