import Card from "../../../ListOfProduct/Card";
import DataProductsVegetables from "./DataProductsVegetables";
export default function ProductCardVegetables() {
  return (
    <div className="container allproduct">
      <div className="row">
        {DataProductsVegetables.ProductData.map((listVegetables) => (
          <Card
            key={listVegetables.id}
            image={listVegetables.image}
            title={listVegetables.title}
            price={listVegetables.price}
            btn={listVegetables.btn}
            item={listVegetables}
          />
        ))}
      </div>
    </div>
  );
}
