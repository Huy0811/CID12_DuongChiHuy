class InputGroup {
  $container;
  $input;
  $checkIcon;
  $exclamationIcon;
  $errorMsg;

  constructor(type, id, placeholder) {
    this.$container = document.createElement("div");
    this.$container.classList.add("box");

    this.$input = document.createElement("input");
    this.$input.classList.add("input-field");
    this.$input.setAttribute("id", id);
    this.$input.type = type;
    this.$input.placeholder = placeholder;

    this.$checkIcon = document.createElement("i");
    this.$checkIcon.classList.add("fas", "fa-check-circle");

    this.$exclamationIcon = document.createElement("i");
    this.$exclamationIcon.classList.add("fas", "fa-exclamation-circle");

    this.$errorMsg = document.createElement("small");
    this.$errorMsg.classList.add("errorMsg");
  }

  getInputValue = () => {
    return this.$input.value;
  };

  setInputValue = (newValue) => {
    this.$input.value = newValue;
  };

  render = () => {
    this.$container.appendChild(this.$input);
    this.$container.appendChild(this.$checkIcon);
    this.$container.appendChild(this.$exclamationIcon);
    this.$container.appendChild(this.$errorMsg);
    return this.$container;
  };
}

export { InputGroup };
