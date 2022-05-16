import DataProductFruits from "./DataProductsFruits";
import Card from "../../../ListOfProduct/Card";
export default function ProductCardFruits(){
    return(
        <div className="container allproduct">
        <div className="row">
          {DataProductFruits.ProductData.map((listFruits) => (
            <Card
              key={listFruits.id}
              image={listFruits.image}
              title={listFruits.title}
              price={listFruits.price}
              btn={listFruits.btn}
              item={listFruits}
            />
          ))}
        </div>
      </div>
    );
}