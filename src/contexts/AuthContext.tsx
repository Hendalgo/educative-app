import React, { createContext, useContext, useReducer } from "react";
import AuthReducer from "@reducers/AuthReducer";

// Create context
const AuthContext = createContext<any>(null);

const AuthProvider = ({children}: React.PropsWithChildren<{}>) => {
  const [authState, authDispatch] = useReducer(AuthReducer, {
    user: null,
    isAuthenticated: false,
  });
  return (
    <AuthContext.Provider value={{authState, authDispatch}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };