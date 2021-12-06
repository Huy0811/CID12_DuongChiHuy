class Display {
  $container;
  $card;
  $cardTop;
  $cardBot;
  $question;
  $answer;
  $add;
  $minus;

  constructor(question, answer) {
    this.$container = document.createElement("div");
    this.$container.classList.add("display");

    this.$card = document.createElement("div");
    this.$card.classList.add("display__card");

    this.$cardTop = document.createElement("div");
    this.$cardTop.classList.add("dipslay__card--top");

    this.$cardBot = document.createElement("div");
    this.$cardBot.classList.add("dipslay__card--bot");

    this.$question = document.createElement("p");
    this.$question.setAttribute("id", "question");
    this.$question.innerHTML = `${question}`;

    this.$answer = document.createElement("p");
    this.$answer.setAttribute("id", "answer");
    this.$answer.innerHTML = `${answer}`;

    this.$add = document.createElement("p");
    this.$add.setAttribute("id", "add");
    this.$add.innerHTML = "+";
    this.$add.addEventListener("click", this.unhideAnswer);

    this.$minus = document.createElement("p");
    this.$minus.setAttribute("id", "minus");
    this.$minus.innerHTML = "-";
    this.$minus.addEventListener("click", this.hideAnswer);
  }

  unhideAnswer = () => {
    document.getElementById("answer").classList.add("unhide");
    document.getElementById("add").classList.add("hide");
    document.getElementById("minus").classList.add("unhide");
  };

  hideAnswer = () => {
    document.getElementById("answer").classList.remove("unhide");
    document.getElementById("minus").classList.remove("unhide");
    document.getElementById("add").classList.remove("hide");
  };

  render = () => {
    this.$container.appendChild(this.$card);
    this.$card.appendChild(this.$cardTop);
    this.$cardTop.appendChild(this.$question);
    this.$cardTop.appendChild(this.$add);
    this.$cardTop.appendChild(this.$minus);
    this.$card.appendChild(this.$cardBot);
    this.$cardBot.appendChild(this.$answer);
    return this.$container;
  };
}
