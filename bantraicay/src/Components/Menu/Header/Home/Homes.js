
import Footer from "../../../Footer/Footer";
import Carousel from "../../../ListOfCarousel/Carousel";
import Subcribe from "../../../ListOfProduct/Subcribe";
import AllFifth from "../About/components/AllFifth";
import AllFourth from "../About/components/AllFourth";
import Products from "../Contact/SingProduct/components/Products";
import ProductCardFruits from "../Products/ProductCardFruits";

const FeaturedProducts = {
      title: 'Featured Products',
      content: 'Our Products',
      description: 'Clean, fresh, organic fruits such as apples, oranges, grapes...Originally clear. No preservatives. High nutrition. Buy fresh fruit online, discount price now!'
}

const Testimony = {
      title: 'Testimony',
      content: 'FOUNDERS',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in'
}

export default function Homes() {
  return (
    <div>
      <Carousel />
      <div className="AllFifthcss">
        <AllFifth />
      </div>
      <div className="AllFifthcss">
      <Products
      title={FeaturedProducts.title}
      content={FeaturedProducts.content}
      description={FeaturedProducts.description}
      />
      </div>
        <ProductCardFruits />
      <div className="AllFifthcss">
      <Products
      title={Testimony.title}
      content={Testimony.content}
      description={Testimony.description}
      />
      </div>
      <div className="AllFifthcss">
        <AllFourth />
      </div>
      <Subcribe />
      <Footer />
    </div>
  );
}
