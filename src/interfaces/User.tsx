interface User {
  id: number;
  username?: string;
  firstname?: string;
  lastname?: string;
  gender?: string;
  phone?: string;
  email: string;
  token: string;
  image?: string;
}

export default User;
