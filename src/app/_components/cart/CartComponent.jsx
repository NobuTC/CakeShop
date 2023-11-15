"use client";
const { Card, CardBody, Button, Image, Chip } = require("@nextui-org/react");

import { useRouter } from "next/navigation";
import { useCart, useOpenContext } from "../../providers";
import EmptyCart from "./EmptyCart";

const CartComponent = ({ isCheckout = false }) => {
  const { cartState, dispatch } = useCart();
  const { onOpenChange } = useOpenContext();
  const { cart } = cartState;
  const router = useRouter();

  const onClickEmptyBasket = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const onDelete = (index) => {
    dispatch({ type: "DELETE_FROM_CART", payload: index });
  };

  //Looping everysingle cartProducts prices and add it to total and repeat
  //zero is beginning value of total
  const totalPrice = cart.reduce(
    (total, cartProduct) => total + cartProduct.product.price,
    0
  );

  if (!cart || cart.length === 0) {
    return <EmptyCart isCheckout={isCheckout} />;
  }

  return (
    <Card>
      <div>
        <CardBody>
          <h1 className="text-lg font-bold"> Korisi</h1>
          <div>
            {cart
              .map(({ product, message }, index) => {
                return (
                  <div className="flex p-4 border-b" key={index}>
                    <Image
                      src={product.image_url}
                      alt="Item Image"
                      className="w-16 h-16 object-cover mr-4 rounded-md"
                    />
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold">{product.name}</h2>
                      <p className="text-gray-600">
                        Category: {product.category}
                      </p>
                      <div className="row flex gap-2 mt-1">
                        {product.info_allergic.map((allergic) => {
                          return (
                            <Chip key={allergic} color="primary">
                              {allergic}
                            </Chip>
                          );
                        })}
                      </div>
                      {!!message && (
                        <p className="text-gray-600">Viesti: {message}</p>
                      )}
                      <div className="flex mt-2">
                        <Button
                          className="ml-auto"
                          onClick={() => {
                            onDelete(index);
                          }}
                        >
                          Poista
                        </Button>
                      </div>
                    </div>
                    <p className="text-lg font-semibold">{product.price}€</p>
                  </div>
                );
              })
              .reverse()}
          </div>

          <div className="flex justify-between p-4 bg-gray-200">
            <p className="text-lg font-semibold">Yhteensä:</p>
            <p className="text-lg font-semibold">{totalPrice}€</p>
          </div>
        </CardBody>

        <CardBody>
          <div className="flex justify-center items-center">
            <Button className="m-3" color="danger" onClick={onClickEmptyBasket}>
              Tyhjennä kori
            </Button>

            <Button
              className="m-3"
              color="primary"
              onClick={() => {
                router.push("/checkout");
                onOpenChange(false);
              }}
            >
              Vahvista tilaus
            </Button>
          </div>
        </CardBody>
      </div>
    </Card>
  );
};

export default CartComponent;
