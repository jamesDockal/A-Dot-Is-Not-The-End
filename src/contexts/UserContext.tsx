import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useContext } from "react";
import { register } from "./functions";

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
};

export const UserContext = createContext({} as UserContextValue);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<string | any>(Cookies.get("user"));

  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, register }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
