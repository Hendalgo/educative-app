import { AUTH_REDUCER_ACTIONS } from '@constants/reducersActions';
import {AuthAction, AuthState} from 'src/interfaces/Auth';

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AUTH_REDUCER_ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case AUTH_REDUCER_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
