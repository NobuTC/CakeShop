"use client";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React from "react";

function CustomCard({ item }) {
  const router = useRouter();
  console.log(item);
  const { id, name, info_allergic, price, image_url } = item;

  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => {
        // /product/4
        // /product/5
        router.push(`/product/${id}`);
      }}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={name}
          className="w-full object-cover h-[140px]"
          src={image_url}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{name}</b>
        <div className="row flex gap-2">
          {info_allergic.map((allergic) => {
            return (
              <Chip key={allergic} color="primary">
                {allergic}
              </Chip>
            );
          })}
        </div>

        <p className="text-default-500">{price}€</p>
      </CardFooter>
    </Card>
  );
}

export default CustomCard;
