import Selector from "../../_components/selector/Selector";

import { Button, CardHeader, Chip, Image } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

async function getProduct(id) {
  try {
    const res = await fetch(process.env.URL + "/api/product/" + id);
    if (res.status === 200) {
      return res.json();
    } else {
      return { product: null };
    }
  } catch (error) {
    console.error("Error fetching product data by id : " + id);
    return { product: null };
  }
}

export default async function Product({ params: { id } }) {
  const { product } = await getProduct(id);

  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
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
              />
            </div>
            <div className="row mt-6">
              <Button color="primary">Tilaa</Button>
              <p className="text-tiny  mt-3">
                Kakun teossa voi kestää 1 viikon.
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
