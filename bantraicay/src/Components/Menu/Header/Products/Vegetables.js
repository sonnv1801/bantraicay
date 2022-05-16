
/**
 * Improt CarouselImages
 */
import CarouselImages from "../../../ListOfCarousel/CarouselImages";
/**
 * Import Contents
 */
import Contents from "../../../ListOfProduct/Contents";
/**
 * SearchAndCart
 */
import SearchAndCart from "./SearchAndCart";

import vegetables from "../../../../Images/vegetables.jpg";

/**
 * Import Pagination
 */
import Pagination from "../../../ListOfProduct/Pagination";

/**
 * Import Footer
 */
import Footer from "../../../Footer/Footer";
/**
 * Import ProductCardVegetables
 */
import ProductCardVegetables from "./ProductCardVegetables";


const href = {
  images: vegetables,
  titles: "HOME VEGETABLES",
  contents: "VEGETABLES",
  content: "LIST OF VEGETABLES",
  router: "/products/vegertables",
};
export default function Vegetables() {
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

      <ProductCardVegetables/>
      <div className="container pagination-color">
        <Pagination href={href.router} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
