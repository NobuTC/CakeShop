"use client";
import { Button, Card, CardBody } from "@nextui-org/react";
import { CartIcon } from "../icons/CartIcon";
import { useRouter } from "next/navigation";

export default function EmptyCart({ isCheckout = false }) {
  const router = useRouter();
  return (
    <div className="live-preview flex h-full w-full not-prose justify-center items-center ">
      <Card className="border-none m-4">
        <CardBody className="text-center justify-center items-center">
          <CartIcon size={40} />
          <h1 className="text-lg font-bold">Korisi on tyhjä.</h1>
          <p className="text-sm">
            Sinulla ei ole vielä yhtään tuotetta ostoskorissasi.
          </p>

          {isCheckout && (
            <Button
              color="default"
              className="m-3 font-semibold"
              onClick={() => {
                router.push("/");
              }}
            >
              « Takaisin tilaamaan kakkuja
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
