import Carousel from "../../components/Carousel/Carousel";
import { Helmet } from "react-helmet";
import Building from "../../components/Building/Building";
import CardCarousel from "../../components/CardCarousel/CardCarousel";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Fans Coffee & Bakery</title>
        <meta name="title" content="Fans Coffee & Bakery" />
        <meta
          name="description"
          content="En Fans Coffee & Bakery somos fans de ti, ven y disfruta de nuestros productos."
        />
      </Helmet>
      <Carousel />
    </div>
  );
}

export default Home;
