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
    this.$question.classList.add("question");
    this.$question.innerHTML = `${question}`;

    this.$answer = document.createElement("p");
    this.$answer.classList.add("answer");
    this.$answer.innerHTML = `${answer}`;

    this.$add = document.createElement("p");
    this.$add.classList.add("add");
    this.$add.innerHTML = "+";

    this.$minus = document.createElement("p");
    this.$minus.classList.add("minus");
    this.$minus.innerHTML = "-";
  }

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
