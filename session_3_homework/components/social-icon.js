class SocialIcon {
  $icon;
  $imgFacebook;
  $imgTwitter;
  $imgGoogle;

  constructor() {
    this.$icon = document.createElement("div");
    this.$icon.classList.add("social-icons");

    this.$imgFacebook = document.createElement("img");
    this.$imgFacebook.src = "./images/fb.png";

    this.$imgTwitter = document.createElement("img");
    this.$imgTwitter.src = "./images/tw.png";

    this.$imgGoogle = document.createElement("img");
    this.$imgGoogle.src = "./images/gp.png";
  }

  render = () => {
    this.$icon.appendChild(this.$imgFacebook);
    this.$icon.appendChild(this.$imgTwitter);
    this.$icon.appendChild(this.$imgGoogle);
    return this.$icon;
  };
}

export { SocialIcon };
