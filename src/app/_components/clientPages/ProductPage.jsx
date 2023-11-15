"use client";
import Selector from "../selector/Selector";
import { Button, CardHeader, Chip, Image } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";
import { useCart, useOpenContext } from "../../providers";

export default function ProductPage({ product }) {
  // this is how we use context to get the ducks out or send the duck to context
  // same const dispatch = useCart().dispatch
  const { dispatch } = useCart();

  const { onOpen } = useOpenContext();

  const [customerMessage, setCustomerMessage] = useState("");
  if (!product) {
    return null; // You might want to render a loading state or error message here
  }

  const onChangeCustomerMessage = (event) => {
    setCustomerMessage(event.target.value);
  };

  const onClickingOrderBtn = (event) => {
    event.preventDefault();
    console.log("Kakku on lisätty koriin", product, customerMessage);
    const orderProduct = { message: customerMessage, product: product };
    dispatch({ type: "ADD_TO_CART", payload: orderProduct });
    onOpen();
  };

  return (
    <div className="container mx-auto">
      <form
        className="grid grid-cols-1 md:grid-cols-2 "
        onSubmit={onClickingOrderBtn}
      >
        <div className="flex justify-end items-center h-full">
          <Image
            isZoomed
            width={400}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </div>

        <div className="p-8">
          <Card>
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">{product.name}</p>
                <p className="text-small text-default-500">{product.info}</p>
              </div>
            </CardHeader>
            <CardBody>
              <div className="row flex gap-2">
                {product.info_allergic.map((allergic) => {
                  return (
                    <Chip key={allergic} color="primary">
                      {allergic}
                    </Chip>
                  );
                })}
              </div>

              <Selector price={product.price} size={product.size} />

              <div className="row mt-5">
                <Textarea
                  label="Valinnainen"
                  labelPlacement="outside"
                  placeholder="Kirjoita viesti tai nimi kenelle kakku menee"
                  className="max-w-xs"
                  value={customerMessage}
                  onChange={onChangeCustomerMessage}
                />
              </div>
              <div className="row mt-6">
                <Button color="primary" type="submit">
                  Tilaa
                </Button>
                <p className="text-tiny  mt-3">
                  Kakun teossa voi kestää 1 viikon.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </form>
    </div>
  );
}
