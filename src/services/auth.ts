import API_INSTANCE from '@constants/Api';
import User from '@interfaces/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = async (email: string, password: string) => {
  try {
    const response = await API_INSTANCE.post('/auth/login', {
      username: email,
      password,
    });
    const user: User = {
      id: response.data.id,
      firstname: response.data.firstName,
      lastname: response.data.lastName,
      gender: response.data.gender,
      email: response.data.email,
      image: response.data.image,
      token: response.data.token,
    };
    await AsyncStorage.setItem('token', response.data.token);
    return user;
  } catch (error: any) {
    return error;
  }
};

export {login};
