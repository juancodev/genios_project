import { Navigate } from "react-router-dom";
import { useUserAuth } from "../store/user";

interface childrenProp {
  children: JSX.Element | JSX.Element[];
}

export const AuthRouter = ({ children }: childrenProp) => {
  const { user } = useUserAuth();

  if (!user.email) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return <>{children}</>;
};
