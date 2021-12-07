const app = document.getElementById("app");

let answerList = document.getElementsByClassName("answer");
let addList = document.getElementsByClassName("add");
let minusList = document.getElementsByClassName("minus");

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

displayOne.$add.addEventListener("click", () => {
  unhideAnswer(0);
});
displayOne.$minus.addEventListener("click", () => {
  hideAnswer(0);
});

displayTwo.$add.addEventListener("click", () => {
  unhideAnswer(1);
});
displayTwo.$minus.addEventListener("click", () => {
  hideAnswer(1);
});

displayThree.$add.addEventListener("click", () => {
  unhideAnswer(2);
});
displayThree.$minus.addEventListener("click", () => {
  hideAnswer(2);
});

function unhideAnswer(index) {
  answerList[index].classList.add("unhide");
  addList[index].classList.add("hide");
  minusList[index].classList.add("unhide");
}

function hideAnswer(index) {
  answerList[index].classList.remove("unhide");
  minusList[index].classList.remove("unhide");
  addList[index].classList.remove("hide");
}

app.appendChild(title);
app.appendChild(container);
