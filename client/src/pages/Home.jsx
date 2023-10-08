import CoverPicture from "../components/common/CoverPicture";
import Maps from "../components/home/Maps";
import Event from "../components/home/Event";
import BestSelling from "../components/home/BestSelling";
import Category from "../components/home/Cataegory";

const Home = () => {
  return (
    <div>
      <CoverPicture />
      <Category />
      <BestSelling />
      <Event />
      <Maps />
    </div>
  );
};
export default Home;
