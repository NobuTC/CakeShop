"use client";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React from "react";

function CustomCard({ item }) {
  const router = useRouter();
  const { id, name, info_allergic, price } = item;

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
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
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
