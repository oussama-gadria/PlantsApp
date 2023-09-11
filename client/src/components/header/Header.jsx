import { Link, useNavigate } from "react-router-dom";
import Logo from "../common/Logo";
import BagSvg from "../../assets/svg/BagSvg";
import jwt_decode from "jwt-decode";
import { useCallback, useContext, useEffect, useState } from "react";
import SignInSvg from "../../assets/svg/SignInSvg";
import { TokenContext } from "../../context/Token";
import axios from "axios";
import LogOutSvg from "../../assets/svg/LogOutSvg";
const Header = () => {
  const [userIsConnect, setUserIsConnect] = useState(false);
  const [userConnect, setUserConnect] = useState();
  const token = useContext(TokenContext) || localStorage.getItem("token");
  const navigate = useNavigate();
  const fetchUserData = useCallback(async (userId) => {
    if (userId) {
      const user = await axios.post("http://localhost:5000/user/getUser", {
        userId,
      });
      setUserConnect(user.data);
      setUserIsConnect(true);
    }
  }, []);
  useEffect(() => {
    if (token) {
      const userConnect = jwt_decode(token);
      fetchUserData(userConnect.id);
    } else {
      setUserIsConnect(false);
    }
  }, [token, fetchUserData]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cartId");
    navigate("/SignIn");
  };
  return (
    <div className="shadow-xl font-sans ">
      <div className="flex justify-center bg-green">
        <p className=" py-2 text-white pr-20 font-bold text-sm">
          FREE SHIPPING ON ALL FULL SUN PLANTS! FEB . 25-2B{" "}
        </p>
      </div>
      <div className="container mx-auto  flex justify-between px-9 h-[50px]">
        <Logo />
        <ul className="flex flex-row items-center text-sm font-bold ">
          <li className="mx-11">
            <Link to="/">
              <a href="/#">Home</a>
            </Link>
          </li>
          <li className="mx-11">
            <Link to="/shop">
              <a href="/#">Products</a>
            </Link>
          </li>
          <li className="mx-11">
            <Link to="/AboutUs">
              <a href="/#">About us</a>
            </Link>
          </li>
          <li className="mx-11">
            <Link to="/ContactUs">
              <a href="/#">Contact us</a>
            </Link>
          </li>
        </ul>
        <div className="flex flex-row items-center">
          <div className="pr-4">
            <BagSvg />
          </div>
          {!userIsConnect && (
            <Link to="/SignIn">
              <div className="flex flex-row items-center">
                <SignInSvg />
                <p className="text-green font-extrabold">Sign In</p>
              </div>
            </Link>
          )}
          {userIsConnect && (
            <div className="flex flex-row items-center">
              <p className="text-sm font-bold pr-3">
                Welcome {userConnect.FirstName} !
              </p>
              <button onClick={logout}>
                <LogOutSvg />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
