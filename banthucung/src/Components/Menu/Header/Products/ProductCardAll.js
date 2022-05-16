import DataProducts from "./DataProducts";
import Card from "../../../ListOfProduct/Card";
export default function ProductCardAll() {
  return (
    <div className="container allproduct">
      <div className="row">
        {DataProducts.ProductData.map((listProducts) => (
          <Card
            key={listProducts.id}
            image={listProducts.image}
            title={listProducts.title}
            price={listProducts.price}
            btn={listProducts.btn}
            item={listProducts}
          />
        ))}
      </div>
    </div>
  );
}
