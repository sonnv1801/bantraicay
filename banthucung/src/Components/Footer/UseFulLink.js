import { Link } from "react-router-dom";
export default function UseFulLink() {
  return (
    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
      <p>
        <Link to="/" className="text-reset">
          Home
        </Link>
      </p>
      <p>
        <Link to="/products/allproducts" className="text-reset">
          Products
        </Link>
      </p>
      <p>
        <Link to="/blog" className="text-reset">
          Blog
        </Link>
      </p>
      <p>
        <Link to="/contact" className="text-reset">
          Contact
        </Link>
      </p>
      <p>
        <Link to="/about" className="text-reset">
          About
        </Link>
      </p>
    </div>
  );
}
