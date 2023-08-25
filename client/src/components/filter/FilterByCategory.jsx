import { useState } from "react";
import Arrow from "../../assets/svg/Arrow";

const FilterByCategory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="relative inline-block text-left">
                <div className='mx-7 pt-8 md:pt-0'>
                    <button
                        type="button"
                        className="inline-flex w-48   justify-between  rounded-md bg-white text-green px-3 py-3 text-xs font-extrabold text-gray-900 shadow-2xl  ring-gray-300 hover:bg-gray-50 dark:border-darkBlue dark:placeholder-gray-400  dark:bg-darkBlue"
                        id="menu-button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={toggleMenu}
                    >
                        Select Category
                        <Arrow />
                    </button>
                </div>
                {isOpen && (
                    <div className="absolute mx-7 md:right-0 z-10 mt-1 w-48  rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-darkBlue dark:placeholder-gray-400  dark:bg-darkBlue" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" >
                        <div className="py-1" role="none">
                            <button className="px-4 py-1 text-xs cursor-pointer font-extrabold" role="menuitem" tabIndex="-1" >All Categories</button>
                            <button className="px-4 py-1 text-xs cursor-pointer font-extrabold" role="menuitem" tabIndex="-1" >Indoor Plants</button>
                            <button className="px-4 py-1 text-xs cursor-pointer font-extrabold" role="menuitem" tabIndex="-1" >Outdoor plants</button>
                            <button className="px-4 py-1 text-xs cursor-pointer font-extrabold" role="menuitem" tabIndex="-1" >Sun requirements</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default FilterByCategory;