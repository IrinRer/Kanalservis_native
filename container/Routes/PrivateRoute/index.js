import React from "react";
import { useSelector } from "react-redux";
import Auth from "../../../component/Auth";
import { getAuth } from "../../../store/auth/selectors";

const PrivateRoute = ({ children: Component }) => {
  const isAuth = useSelector(getAuth);
  return <>{isAuth === "yes" ? Component : <Auth />}</>;
};

export default PrivateRoute;
