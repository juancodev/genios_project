import { createContext, useState, useEffect } from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";

interface childrenProp {
  children: JSX.Element | JSX.Element[];
}

interface authValuesProps {
  userSession: User | null;
  logout: () => void;
  setUserSession: React.Dispatch<React.SetStateAction<User | null>>;
}

export const ContextAuth = createContext<authValuesProps>({
  userSession: null,
  logout: () => null,
  setUserSession: () => null,
});

export const AuthProvide = ({ children }: childrenProp) => {
  const [userSession, setUserSession] = useState<User | null>(null);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate("/login");
  };

  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserSession(user);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const authValue = { userSession, logout, setUserSession };

  return (
    <>
      <ContextAuth.Provider value={authValue}>{children}</ContextAuth.Provider>
    </>
  );
};
