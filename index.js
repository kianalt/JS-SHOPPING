import { getCookie } from "./utils/cookies.js";
import { getDtata } from "./utils/httpRequest.js";
import { shortenText } from "./utils/stringFunc.js";

let allProducts = null;
let serch = "";
let category = "all";

const loginButton = document.getElementById("login");
const dashbordButton = document.getElementById("dashboard");
const mainContent = document.getElementById("products");
const serchButton = document.querySelector("button");
const inputBox = document.querySelector("input");
const listItem = document.querySelectorAll("li");

const showProducts = (products) => {
  //   console.log("Products:", products); // Debug
  mainContent.innerHTML = "";

  // Append each product to the container
  products.forEach((product) => {
    const jsx = `
        <div>
          <img alt="${product.title}" src="${product.image}" />
          <h4>${shortenText(product.title)}</h4>
          <div id="price">
            <p>$ ${product.price}</p>
            <button> Buy  <i class="fa-solid fa-cart-shopping"></i></button>
          </div>
          <div  id="rate">
          <i class="fa-solid fa-star"></i>
            <span>${product.rating.rate}</span>
          </div>
            <div  id="count">
          <i class="fa-solid fa-user"></i>
            <span>${product.rating.count}</span>
          </div>
        </div>
      `;

    // Use += to append content, not overwrite
    mainContent.innerHTML += jsx;
  });
};

const init = async () => {
  const cookie = getCookie();
  if (cookie) {
    loginButton.style.display = "none";
    dashbordButton.style.display = "block";
  } else {
    dashbordButton.style.display = "none";
    loginButton.style.display = "block";
  }

  allProducts = await getDtata("products");
  showProducts(allProducts);
};
const filterProducts = () => {
  let filterProducts = null;
  filterProducts = allProducts.filter((product) => {
    if (category === "all") {
      return product.title.toLowerCase().includes(serch);
    } else {
      return (
        product.category === category &&
        product.title.toLowerCase().includes(serch)
      );
    }
  });
  showProducts(filterProducts);
};
const serchHandler = () => {
  //trim for remove space
  serch = inputBox.value.trim().toLowerCase();
  filterProducts();
};

const filterHandeler = (event) => {
  category = event.target.innerText.toLowerCase();

  listItem.forEach((li) => {
    if (li.innerText.toLowerCase() === category) {
      li.className = "selected";
    } else {
      li.className = "";
    }
  });

  filterProducts();
};

document.addEventListener("DOMContentLoaded", init);
serchButton.addEventListener("click", serchHandler);

listItem.forEach((li) => li.addEventListener("click", filterHandeler));
