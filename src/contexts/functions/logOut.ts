import Cookies from "js-cookie";

async function logOut(setToken: Function) {
  Cookies.remove("token");
  setToken("");
}

export default logOut;
