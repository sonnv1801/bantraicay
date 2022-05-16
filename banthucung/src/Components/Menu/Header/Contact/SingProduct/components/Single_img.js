import products from '../images/products.jpg'
export default function Single_img(){
    return(
        <div className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={products} className="d-block w-100" alt="..."/>
            </div>
          </div>
      </div>
    );
}