import { useAppSelector } from "../Redux/store";
import { Navigate, useLocation } from "react-router-dom";
export const Private = ({ children }: any) => {
  const isAuth = useAppSelector((store) => store.AuthReducer.isAuth);

  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={location.pathname} replace={true} />;
  }

  return children;
};
