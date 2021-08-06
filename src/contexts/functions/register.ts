import Cookies from "js-cookie";
import api from "../../services/api";

async function register(email: string, password: string) {
  try {
    const { data } = await api.post("/users/register", {
      email,
      password,
    });
    Cookies.set("token", data.token);
  } catch (e) {
    throw new Error(e.response.data.error);
  }
}

export default register;
