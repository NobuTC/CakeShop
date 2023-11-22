"use client";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { CheckIcon } from "../icons/CheckIcon";

export default function ConfirmationPage() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="border-none m-4 p-8 text-center">
        <CardBody>
          <div className="flex justify-center">
            <CheckIcon icon="fa-solid fa-check" width={54} height={54} />
          </div>

          <h1 className="text-3xl font-boldmb-4">
            Tilauksesi on vastaan otettu!
          </h1>
          <h3 className=" text-lg mb- 6 p-2 text-center">
            Kiitos paljon tilauksestasi.
          </h3>
          <Button
            className="mt-4 default hover:bg-gray-400"
            color="default"
            onClick={() => {
              router.push("/");
            }}
          >
            Takaisin kotivalikkoon
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
