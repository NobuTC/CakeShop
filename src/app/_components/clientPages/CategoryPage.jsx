"use client";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function CategoryPage() {
  const router = useRouter();
  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl text-center">Kakku kategoria</h1>
      </div>

      <div className="live-preview flex h-full w-full not-prose justify-center items-center ">
        <Card isFooterBlurred radius="lg" className="border-none m-4">
          <Image
            className="object-cover"
            height={300}
            width={400}
            alt="NextUI Fruit Image with Zoom"
            src="https://i.imgur.com/c2bO85i.jpg"
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Juusto kakut</p>

            <Button
              onPress={() => router.push("/category/cheesecake")}
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Katso lisää
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred radius="lg" className="border-none m-4">
          <Image
            className="object-cover"
            height={300}
            width={400}
            alt="NextUI Fruit Image with Zoom"
            src="https://i.imgur.com/BAWe2Np.jpg"
          />
          <div>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Täyte kakut</p>

              <Button
                onPress={() => router.push("/category/filledcake")}
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Katso lisää
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}
