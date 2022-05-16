
/**
 * Import Contents
 */
import Contents from "../../../ListOfProduct/Contents";
/**
 * Import Carousel
 */
import Carousel from "../../../ListOfCarousel/Carousel";
/**
 * Import Pagination
 */
import Pagination from "../../../ListOfProduct/Pagination";
/**
 * Import Subcribe
 */
import Subcribe from "../../../ListOfProduct/Subcribe";
/**
 * Import Footer
 */
import Footer from "../../../Footer/Footer";
/**
 * Import SearchAndCart
 */
import SearchAndCart from "./SearchAndCart";
import ProductCardAll from "./ProductCardAll";
const href = {
    content: "LIST OF PRODUCTS",
    router: "/products/allproducts"
}

export default function AllProduct() {
    return (
        <>
            <div className="carousels">
                <Carousel />
            </div>

            <Contents
                content={href.content}
            />

            <SearchAndCart/>

            <ProductCardAll/>

            <div className="container pagination-color">
                <Pagination
                    href={href.router}
                />
            </div>
            <Subcribe /> 
            <Footer />
        </>
    );
}