import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ ...rest }) => {
  const { auth } = useSelector((state) => ({ ...state }));

  return auth && auth.token ? (
    <Route {...rest} />
  ) : (
    <Redirect to="/login"></Redirect>
  );
};

export default PrivateRoute;
