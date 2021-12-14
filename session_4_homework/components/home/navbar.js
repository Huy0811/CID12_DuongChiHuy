class Navbar {
  $container;
  $nav;
  $logo;
  $navItem;
  $search;
  $input;
  $btnSearch;
  $cart;
  $imgCart;
  $logout;
  $imgLogout;
  $linkContainer;
  $linkToHome;
  $linkToProduct;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("navbar");

    this.$nav = document.createElement("div");
    this.$nav.classList.add("nav");

    this.$logo = document.createElement("img");
    this.$logo.classList.add("brand-logo");
    this.$logo.src = "images/dosiin-logo.png";

    this.$navItem = document.createElement("div");
    this.$navItem.classList.add("nav-items");

    this.$search = document.createElement("div");
    this.$search.classList.add("search");

    this.$input = document.createElement("input");
    this.$input.classList.add("search-box");
    this.$input.type = "text";
    this.$input.placeholder = "search brand, product";

    this.$btnSearch = document.createElement("button");
    this.$btnSearch.classList.add("search-btn");
    this.$btnSearch.innerHTML = "search";

    this.$cart = document.createElement("a");
    this.$imgCart = document.createElement("img");
    this.$imgCart.src = "images/cart.jpg";

    this.$logout = document.createElement("a");
    this.$logout.addEventListener("click", this.handleLogout);
    this.$imgLogout = document.createElement("img");
    this.$imgLogout.src = "images/logout.jpg";

    this.$linkContainer = document.createElement("ul");
    this.$linkContainer.classList.add("links-container");

    this.$linkToHome = document.createElement("li");
    this.$linkToHome.classList.add("link-item");
    this.$linkToHome.innerHTML = "home";

    this.$linkToProduct = document.createElement("li");
    this.$linkToProduct.classList.add("link-item");
    this.$linkToProduct.innerHTML = "product";
  }

  handleLogout = () => {
    firebase.auth().signOut();
  };

  render = () => {
    this.$container.appendChild(this.$nav);
    this.$container.appendChild(this.$linkContainer);
    this.$nav.appendChild(this.$logo);
    this.$nav.appendChild(this.$navItem);
    this.$navItem.appendChild(this.$search);
    this.$search.appendChild(this.$input);
    this.$search.appendChild(this.$btnSearch);
    this.$navItem.appendChild(this.$cart);
    this.$cart.appendChild(this.$imgCart);
    this.$navItem.appendChild(this.$logout);
    this.$logout.appendChild(this.$imgLogout);
    this.$linkContainer.appendChild(this.$linkToHome);
    this.$linkContainer.appendChild(this.$linkToProduct);
    return this.$container;
  };
}

export { Navbar };
