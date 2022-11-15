import { createContext, ReactNode, useContext, useState } from "react";

export type LoginData = { login: string; name: string };

export interface LoginContextData {
  login?: string;
  name?: string;
  setName: (value: string) => void;
  setLogin: (value: string) => void;
  singIn: ({ login, name }: LoginData) => void;
  isLogged: boolean;
}

export const LoginContext = createContext({} as LoginContextData);

interface LoginProviderProps {
  children: ReactNode;
}

export function LoginProvider({ children }: LoginProviderProps) {
  const [login, setLogin] = useState<string>();
  const [name, setName] = useState<string>();
  const [isLogged, setIsLogged] = useState(false);

  const singIn = ({ login, name }: LoginData) => {
    setLogin(login);
    setName(name);
    setIsLogged(true);
  };

  //TODO: verificar se o usuario ja nao está logado antes de entrar

  return (
    <LoginContext.Provider
      value={{ login, name, setLogin, setName, singIn, isLogged }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
