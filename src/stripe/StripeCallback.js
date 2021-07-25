import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { getAccountStatus } from "../actions/stripe";
import { updateUserInLocalStorage } from "../actions/auth";

const StripleCallback = ({ history }) => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const accountStatus = async () => {
    try {
      const res = await getAccountStatus(auth.token);
      // console.log("USER ACCOUNT STATUS ON STRIPE CALLBACK", res);
      updateUserInLocalStorage(res.data, () => {
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        window.location.href = "/dashboard/seller";
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth && auth.token) accountStatus();
  }, [auth]);

  return (
    <div className="d-flex justify-content-center p-5">
      <LoadingOutlined className="display-1 p-5 text-danger" />
    </div>
  );
};

export default StripleCallback;
