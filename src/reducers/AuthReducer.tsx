import { AuthAction, AuthState } from "src/interfaces/Auth";

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  console.log(action.type, action.payload)
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
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