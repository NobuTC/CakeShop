"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React from "react";

function CustomCard({ item }) {
  const router = useRouter();

  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => {
        // /product/4
        // /product/5
        router.push(`/product/${item.id}`);
      }}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.name}
          className="w-full object-cover h-[140px]"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{item.name}</b>
        <p className="text-default-500">{item.price}€</p>
      </CardFooter>
    </Card>
  );
}

export default CustomCard;
