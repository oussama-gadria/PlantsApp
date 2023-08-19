import SearchForm from "../common/SearchForm";

const Header = () => {
  return (
    <div className="shadow-xl font-sans">
      <div className="flex justify-center bg-green">
        <p className=" py-2 text-white pr-20 font-bold text-sm">FREE SHIPPING ON ALL FULL SUN PLANTS! FEB . 25-2B </p>
      </div>
      <div className="container mx-auto  flex justify-between">
        <div className="flex  flex-row items-center">
          <p className="font-bold text-green">
            Green
          </p>
          <p className=" font-black">
            Thumb
          </p>
        </div>
        <ul className="flex flex-row items-center text-sm font-bold ">
          <li className="mx-11">
            <a href="/#">Home</a>
          </li>
          <li className="mx-11">
            <a href="/#">Products</a>
          </li>
          <li className="mx-11">
            <a href="/#">About us</a>
          </li>
          <li className="mx-11">
            <a href="/#">Contact us</a>
          </li>
        </ul>
        <div className="my-2">
          <SearchForm />
        </div>
      </div>
    </div>

  )
}
export default Header;