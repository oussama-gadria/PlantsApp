import CoverPicture from "../components/common/CoverPicture";
import Footer from "../components/footer/Footer";
import BestSelling from "../components/home/BestSelling";
import Category from "../components/home/Cataegory";

const Home=()=>{ 
    return ( 
        <div> 
        <CoverPicture/>
        <Category/>
        <BestSelling/>
        </div>
    )
}
export default Home;