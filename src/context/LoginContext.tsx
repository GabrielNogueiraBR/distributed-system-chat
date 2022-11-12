import { createContext, ReactNode, useContext, useState } from "react";

export type LoginData = { login: string; name: string };

export interface LoginContextData {
  login?: string;
  name?: string;
  setName: (value: string) => void;
  setLogin: (value: string) => void;
  setData: ({ login, name }: LoginData) => void;
}

export const LoginContext = createContext({} as LoginContextData);

interface LoginProviderProps {
  children: ReactNode;
}

export function LoginProvider({ children }: LoginProviderProps) {
  const [login, setLogin] = useState<string>();
  const [name, setName] = useState<string>();

  const setData = ({ login, name }: LoginData) => {
    setLogin(login);
    setName(name);
  };

  return (
    <LoginContext.Provider value={{ login, name, setLogin, setName, setData }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
