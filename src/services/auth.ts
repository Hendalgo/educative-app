import API_INSTANCE from "@constants/Api";
import User from "@interfaces/User";

const login = async (email: string, password: string) => {
  try {
    const response = await API_INSTANCE.post("/auth/login", {
      username: email,
      password,
    });
    const user: User = {
      id: response.data.id,
      firstname: response.data.firstname,
      lastname: response.data.lastname,
      gender: response.data.gender,
      email: response.data.email,
      image: response.data.avatar,
      token: response.data.token,
    }
    return user;
  } catch (error: any) {
    return error;
  }
};

export { login };