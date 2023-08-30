import GlassSearchSvg from "../../assets/svg/GlassSearchSvg";

const SearchForm=()=>{ 
    return (  
        <div className=" px-7 pt-16">
         <form >
                <div className="relative  inline-block ">
                    <GlassSearchSvg/>
                    <input
                        type="search"
                        id="default-search"
                        className="h-[35px] w-full md:w-[150px] pl-14 text-gray-900 shadow-xl text-xs rounded-lg bg-gray-50 dark:border-darkBlue dark:placeholder-gray-400 dark:text-white dark:bg-darkBlue"
                        placeholder="Search..."                      
                        required
                    />
                </div>
            </form>
        </div>
    )
}
export default SearchForm;