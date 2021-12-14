class Logo {
  $logo;

  constructor() {
    this.$logo = document.createElement("img");
    this.$logo.classList.add("logo-form");
    this.$logo.src = "images/dosiin-logo.png";
  }

  render = () => {
    return this.$logo;
  };
}

export { Logo };
