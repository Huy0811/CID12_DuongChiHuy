const app = document.getElementById("app");

const title = document.createElement("div");
title.classList.add("title");
title.innerHTML = "FAQ?";

const container = document.createElement("div");
container.classList.add("container");

const displayOne = new Display(
  "What kind of payment do you support?",
  "We support credit card, Paypal and Stripe"
);
const displayTwo = new Display("Do you support free delivery?", "Yes, we do");
const displayThree = new Display(
  "What's your warranty policy?",
  "2 years warranty"
);
container.appendChild(displayOne.render());
container.appendChild(displayTwo.render());
container.appendChild(displayThree.render());

app.appendChild(title);
app.appendChild(container);
