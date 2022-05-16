import { useCart } from "react-use-cart";
export default function HandleCart() {
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal, totalItems, emptyCart} = useCart();
  if (isEmpty)
    return (
      <div className="alert alert-danger isEmpty" role="alert">
        Your cart is Empty
      </div>
    );
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="container ctn-form" key={index}>
            <div className="row">
              <div className="col-xl-2">
                <img
                  className="img-btn-prd"
                  src={item.image}
                  alt="Đây là hình"
                />
              </div>
              <div className="col-xl-3">
                <h2>{item.title}</h2>
              </div>
              <div className="col-xl-2">
                <h2>{item.price}$</h2>
              </div>
              <div className="col-xl-3">
                <div className="row">
                  <div className="col-xl-4">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <span>-</span>
                    </button>
                  </div>
                  <div className="col-xl-2">
                    <h2>{item.quantity}</h2>
                  </div>
                  <div className="col-xl-4">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 rmi">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  <h5>Remove Items</h5>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      
      <div className="container ctn-total">
        <div className="row">
          <div className="col-xl-2">
            <h1>Total</h1>
          </div>
          <div className="col-xl-3"></div>
          <div className="col-xl-2">
            <h4>{cartTotal}$</h4>
          </div>
          <div className="col-xl-2">
            <div className="row">
              <div className="col-xl-6"></div>
              <div className="col-xl-2">
                <h4>{totalItems}</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="row">
              <div className="col-xl-6">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => emptyCart()}
                >
                  Remove All
                </button>
              </div>
              <div className="col-xl-6">
                <button type="button" className="btn btn-success">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
