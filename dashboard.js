import authHandeler from "./utils/authorization.js";
import { getDtata } from "./utils/httpRequest.js";
const logOutButton = document.querySelector("button");

const mainContent = document.getElementById("container");

const renderUsers = (users) => {
  mainContent.innerHTML = "";
  users.forEach((user) => {
    const jsx = `
    <div id="card">
    <h3>${user.id}</h3>
    <div>
      <p><i class="fa-solid fa-paperclip"></i>Name:</p>
      <span>${user.name.firstname} ${user.name.lastname}</span>
    </div>
      <div>
      <p><i class="fa-solid fa-envelope"></i>Email:</p>
      <span>${user.email} </span>
      </div>
        <div>
      <p><i class="fa-solid fa-phone"></i>Phone:</p>
      <span>${user.phone}</span>
      </div>
    </div>
    `;

    mainContent.innerHTML += jsx;
  });
};

const init = async () => {
  authHandeler();
  const users = await getDtata("users");
  renderUsers(users);
};

const logOutHandeler = () => {
  document.cookie = "token=; max-age=0";
  location.assign("index.html");
};
document.addEventListener("DOMContentLoaded", init());
logOutButton.addEventListener("click", logOutHandeler);
