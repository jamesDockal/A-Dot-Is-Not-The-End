import api from "../../services/api";

async function login(email: string, password: string) {
  try {
    const { data } = await api.post("/users/login", {
      email,
      password,
    });
    return data.token;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
}

export default login;
