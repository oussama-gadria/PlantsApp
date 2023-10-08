import GlassSearchSvg from "../../assets/svg/GlassSearchSvg";

const SearchForm=({setPlants,plantsToShow,setPlantsToShow})=>{ 
    const search=(e)=>{ 
    const searchedPlants=plantsToShow.filter((plant)=>{ 
       return plant.Name.toLowerCase().includes(e.toLowerCase());
    });
    setPlants(searchedPlants);
    }
    return (  
        <div className=" px-7 pt-16">
         <form >
                <div className="relative  inline-block ">
                    <GlassSearchSvg/>
                    <input
                        className="h-[35px] w-full md:w-[150px] pl-10 text-gray-900 shadow-xl text-md rounded-lg bg-gray-50 "
                        placeholder="Search..."                      
                        onChange={(e)=>search(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}
export default SearchForm;