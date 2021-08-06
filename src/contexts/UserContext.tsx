import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useContext } from "react";
import { register, login } from "./functions";

type UserProviderProps = {
  children: ReactNode;
};

type IUser = {
  id: string;
  email: string;
};

type UserContextValue = {
  user: IUser;
  register: (email: string, password: string) => Promise<string>;
  login: (email: string, password: string) => Promise<string>;
};

export const UserContext = createContext({} as UserContextValue);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<string | any>(Cookies.get("token"));

  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, register, login }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
