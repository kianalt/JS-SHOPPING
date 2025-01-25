import authHandeler from "./utils/authorization.js";
import validateForm from "./utils/validation.js";
import { postData } from "./utils/httpRequest.js";
import { setCookies } from "./utils/cookies.js";
const inputBox = document.querySelectorAll("input");
const logInButton = document.querySelector("button");

const handelSubmit = async (event) => {
  event.preventDefault();
  const username = inputBox[0].value;
  const password = inputBox[1].value;
  const validation = validateForm(username, password);
  if (!validation) {
    return;
  }
  const response = await postData("auth/login", {
    username,
    password,
  });
  setCookies(response.token);
  location.assign("index.html");
};

logInButton.addEventListener("click", handelSubmit);
document.addEventListener("DOMContentLoaded", authHandeler);
