import { useState } from "react";
import Arrow from "../../assets/svg/Arrow";

const FilterByPrice = ({
  setMinPriceFilter,
  setMaxPriceFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative inline-block text-left ">
        <div className="mx-7 pt-8 md:pt-0">
          <button
            type="button"
            className="inline-flex w-48   justify-between  rounded-md bg-white text-green px-3 py-3 text-xs font-extrabold text-gray-900 shadow-2xl  ring-gray-300 hover:bg-gray-50 dark:border-darkBlue dark:placeholder-gray-400  dark:bg-darkBlue"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            Price
            <Arrow />
          </button>
        </div>
        {isOpen && (
          <div
            className="absolute mx-7 md:right-0 z-10 mt-1 w-48  rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-darkBlue dark:placeholder-gray-400  dark:bg-darkBlue"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="flex flex-col items-center " role="none">
              <div className="ml-2">
                <label className=" text-xs cursor-pointer font-extrabold">
                  Minimum
                </label>
                <input
                  className="rounded border border-green"
                  onChange={(e) => {
                    setMinPriceFilter(e.target.value);
                  }}
                />
              </div>
              <div className="ml-2">
                <label className="text-xs cursor-pointer font-extrabold">
                  Maximum
                </label>
                <input
                  className="rounded border border-green mb-3"
                  onChange={(e) => {
                    setMaxPriceFilter(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FilterByPrice;
