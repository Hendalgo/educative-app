
import User  from '@interfaces/User';
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
export interface AuthAction {
  type: string;
  payload: User;
}
export interface IAuthContext {
  authState: AuthState;
  authDispatch: ({type, payload}:AuthAction) => void;
}