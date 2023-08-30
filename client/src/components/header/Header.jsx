import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import BagSvg from "../../assets/svg/BagSvg";
import Avatar from "../../assets/svg/AvatarSvg";
const Header = () => {
  return (
    <div className="shadow-xl font-sans ">
      <div className="flex justify-center bg-green">
        <p className=" py-2 text-white pr-20 font-bold text-sm">
          FREE SHIPPING ON ALL FULL SUN PLANTS! FEB . 25-2B{" "}
        </p>
      </div>
      <div className="container mx-auto  flex justify-between px-9">
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
            <a href="/#">About us</a>
          </li>
          <li className="mx-11">
            <a href="/#">Contact us</a>
          </li>
        </ul>
        <div className="flex flex-row items-center">
          <div className="pr-4"> 
          <BagSvg/>
          </div>
         <Avatar/>
        </div>
      </div>
    </div>
  );
};
export default Header;
