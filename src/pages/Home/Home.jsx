import { Helmet } from "react-helmet";
import Building from "../../components/Building/Building";

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
      <Building />
    </div>
  );
}

export default Home;
