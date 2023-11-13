"use client";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function FrontPage() {
  const router = useRouter();
  return (
    <main className="">
      <div>
        {/*    <ul>
          <li>
            <Link href="/product/1">Go to product ID 1</Link>
          </li>
          <li>
            <Link href="/category">Go to category</Link>
          </li>
          <li>
            <Link href="checkout">Go to checkout</Link>
          </li>
        </ul> */}

        <div
          className="relative bg-cover bg-center ..."
          style={{
            backgroundImage: "url(https://i.imgur.com/0iwqIfJ.jpg)",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center">
            <h1 className="text-4xl mb-4">
              Juhlat Tulossa? Tilaa kakku ja herkuttele!
            </h1>
            <Button
              className="row mt-6"
              onClick={() => {
                router.push("/category");
              }}
              color="default"
              variant="light"
              type="submit"
            >
              Katso kakku ehtoja
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
