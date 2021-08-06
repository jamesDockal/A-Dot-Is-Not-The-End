import api from "../../services/api";

async function register(email: string, password: string) {
  try {
    const { data } = await api.post("/users/register", {
      email,
      password,
    });

    return data.token;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
}

export default register;
