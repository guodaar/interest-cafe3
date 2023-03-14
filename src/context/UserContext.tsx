import { PropsWithChildren, createContext } from "react";

import { User } from "../types/user";
import { useLocalStorage } from "../hooks/localStorage";

const UserContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
  isLoggedIn: boolean;
  handleLogOut: () => void;
  handleLogIn: (user: User) => void;
}>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogOut: () => {},
  handleLogIn: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const isLoggedIn = !!user;

  const handleLogOut = () => {
    setUser(null);
  };

  const handleLogIn = (user: User) => {
    setUser(user);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, setUser, handleLogOut, handleLogIn }}
    >
      {children}{" "}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
