/**
 * Improt CarouselImages
 */
import CarouselImages from "../../../ListOfCarousel/CarouselImages";
/**
 * Import Content
 */
import Contents from "../../../ListOfProduct/Contents";
/**
 * Import SearchAndCart
 */
import SearchAndCart from "./SearchAndCart";
/**
 * Import Pagination
 */
import Pagination from "../../../ListOfProduct/Pagination";
/**
 * Import Input
 */
/**
 * Import Footer
 */
import Footer from "../../../Footer/Footer";
/**
 * Impot Image
 */
import fruits from "../../../../Images/fruits.jpg";
/**
 * Import ProductCard
 */
import ProductCardFruits from "./ProductCardFruits";

const href = {
  images: fruits,
  titles: "HOME FRUITS",
  contents: "FRUITS",
  content: "LIST OF FRUIT",
  router: "/products/fruits",
};
export default function Fruits() {
  return (
    <div>
      <div>
        <CarouselImages
          images={href.images}
          titles={href.titles}
          contents={href.contents}
        />
      </div>

      <Contents content={href.content} />

      <SearchAndCart/>

      <ProductCardFruits/>
      
      <div className="container pagination-color">
        <Pagination href={href.router} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
