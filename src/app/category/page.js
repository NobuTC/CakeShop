import {
  Card,
  CardFooter,
  Image,
  Button,
  CardHeader,
  CardBody,
  Textarea,
  Divider,
  Link,
} from "@nextui-org/react";

export default function App() {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl text-center">Kakku kategoria</h1>
      </div>

      <div className="live-preview flex h-full w-full not-prose justify-center items-center ">
        <Card isFooterBlurred radius="lg" className="border-none m-4">
          <Image
            isZoomed
            className="object-cover"
            height={300}
            width={400}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Juusto kakut</p>
            <Link href="/category/cheesecake">
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Katso lisää
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card isFooterBlurred radius="lg" className="border-none m-4">
          <Image
            isZoomed
            className="object-cover"
            height={300}
            width={400}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
          <div>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Täyte kakut</p>
              <Link href="/category/filledcake">
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Katso lisää
                </Button>
              </Link>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}
