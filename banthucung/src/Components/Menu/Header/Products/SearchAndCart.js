/**
 * Import react-use-cart
 */
import { useCart } from "react-use-cart"
/**
 * Import Link
 */
/**
 * Import Input
 */
import Input from "../../../ListOfProduct/Input";
/**
 * Import Link
 */
 import { 
    Link
} from "react-router-dom";

export default function SearchAndCart(){
    const{
        totalItems,
    } = useCart();
    return(
        <div className="container Searchcss">
            <div className="row">
                <div className="col-xl-6 inputcss">       
                    <Input/>
                </div>
                <div className="col-xl-6 cartcss">
                    <span>
                        <Link to="/cart" className="fa fa-cart-plus">({totalItems})</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}