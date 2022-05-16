import { Link } from "react-router-dom";
export default function ProductLink(){
    return(
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <Link to="/products/vegertables" className="text-reset">
                Vegetables
              </Link>
            </p>
            <p>
              <Link to="/products/fruits" className="text-reset">
                Fruits
              </Link>
            </p>
            <p>
              <Link to="/products/fruits" className="text-reset">
                Fruits Juice
              </Link>
            </p>
            <p>
              <Link to="/products/allproducts" className="text-reset">
                Other
              </Link>
            </p>
          </div>
    );
}