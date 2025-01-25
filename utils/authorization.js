import { getCookie } from "./cookies.js";
const authHandeler = () => {
  const cookie = getCookie("token");
  const url = location.href;
  if (cookie && url.includes("auth")) {
    location.assign("index.html");
    return false;
  } else if (!cookie && url.includes("dashboard")) {
    location.assign("index.html");
    return false;
  }
};
export default authHandeler;
