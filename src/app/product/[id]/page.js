import { Button, CardHeader, Chip, Image } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

export default function Product({ params }) {
  //return <div>PRODUCT! {params.id}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="flex justify-center items-center h-full">
        <div className="p-4">
          <Image
            isZoomed
            width={400}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </div>
      </div>

      <div className="p-8">
        <Card>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Mangojuusto kakku</p>
              <p className="text-small text-default-500">
                Ihanan mango juusto tuoreella juustolla
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <div className="row flex gap-2">
              <Chip color="default">L</Chip>
              <Chip color="primary">G</Chip>
            </div>
            <div className="row mt-2 flex gap-2">
              <Chip color="warning" variant="bordered">
                6 hlö
              </Chip>
            </div>
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
