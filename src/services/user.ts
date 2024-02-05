import API_INSTANCE from '@constants/Api';
import User from '@interfaces/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getUser = async (id: string) => {
  try {
    const response = await API_INSTANCE.get(`/users/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}
export const logedUser = async (token?: any) => {
  try {
    const response = await API_INSTANCE.get(`/auth/me`,
    {
      headers: {
        Authorization: `Bearer ${token? token : await AsyncStorage.getItem('access_token')}`
      }
    
    });
    const user: User = {
      id: response.data.id,
      firstname: response.data.firstname,
      lastname: response.data.lastname,
      gender: response.data.gender,
      email: response.data.email,
      image: response.data.avatar,
      token: token,
    }
    return user;
  } catch (error: any) {
    return error;
  }
}