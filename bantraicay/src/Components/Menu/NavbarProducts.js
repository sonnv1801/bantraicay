import { 
  Link
  } from "react-router-dom";

export default function NavbarProducts(props){
    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-header-hover">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" id="navbar-home-hover"aria-current="page">HOME</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/products" className="nav-link dropdown-toggle active" href id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            PRODUCT
                        </Link>    
                        <ul className="dropdown-menu navbar-product" aria-labelledby="navbarDropdown">
                            <li>
                                <Link to="/products/allproducts" className="dropdown-item">ALL PRODUCTS</Link>
                            </li>
                            <li>
                                <Link to="/products/vegertables" className="dropdown-item">VEGETABLES</Link>
                            </li>
                            <li>
                                <Link to="/products/fruits" className="dropdown-item">FRUITS</Link>
                            </li>
                            <li>
                                <Link to="/products/sigleproduct" className="dropdown-item">SIGLE PRODUCTS</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link active" aria-current="page">BLOG</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link active" aria-current="page">CONTACT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link active" aria-current="page">ABOUT</Link>
                    </li>
                </ul>
    )
}