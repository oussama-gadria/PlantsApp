import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to={"/"}>
        <div className="flex  flex-row  ">
          <p className="font-bold text-green text-xl">Green</p>
          <p className=" font-black text-xl">Thumb</p>
        </div>
      </Link>
    </div>
  );
};
export default Logo;
