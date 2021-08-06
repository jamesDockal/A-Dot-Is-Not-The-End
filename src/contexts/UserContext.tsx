import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useContext } from "react";
import { register, login, logOut } from "./functions";

type UserProviderProps = {
  children: ReactNode;
};

type UserContextValue = {
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logOut: (setToken: Function) => void;
};

export const UserContext = createContext({} as UserContextValue);

export function UserProvider({ children }: UserProviderProps) {
  return (
    <UserContext.Provider value={{ register, login, logOut }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
