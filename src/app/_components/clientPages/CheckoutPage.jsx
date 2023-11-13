"use client";
import { Card, CardBody, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useCart } from "../../providers";
import { useRouter } from "next/navigation";
import { CartIcon } from "../icons/CartIcon";

export default function CheckoutPage() {
  const { cartState, dispatch } = useCart();
  const { cart } = cartState;
  const router = useRouter();

  const onClickEmptyBasket = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  if (cart && cart.length === 0) {
    return (
      <div className="live-preview flex h-full w-full not-prose justify-center items-center ">
        <Card className="border-none m-4">
          <CardBody className="text-center justify-center items-center">
            <CartIcon size={40} />
            <h1 className="text-lg font-bold">Korisi on tyhjä.</h1>
            <p className="text-sm">
              Sinulla ei ole vielä yhtään tuotetta ostoskorissasi.
            </p>
            <Button
              color="default"
              className="m-3 font-semibold"
              onClick={() => {
                router.push("/");
              }}
            >
              « Takaisin tilaamaan kakkuja
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="live-preview flex h-full w-full not-prose justify-center items-center ">
        <Card className="border-none m-4">
          <CardBody>
            <h1>Yhteistiedot</h1>
            <div className="m-3 flex space-x-4">
              <Input
                isRequired
                type="name"
                label="Etunimi"
                placeholder="Kirjoita etunimesi"
              ></Input>
              <Input
                isRequired
                type="name"
                label="Sukunimi"
                placeholder="Kirjoita sukunimesi"
              ></Input>
            </div>

            <div className="m-3">
              <Input
                isRequired
                type="address"
                label="Osoite"
                placeholder="Kirjoita osoitteesi"
              ></Input>
            </div>

            <div className="m-2 flex space-x-4">
              <Input
                isRequired
                type="city"
                label="Kaupinki"
                placeholder="Kirjoita kaupunkisi"
              ></Input>
              <Input
                isRequired
                type="post-number"
                label="Postinumero"
                placeholder="Kirjoita postinumerosi"
              ></Input>
            </div>
            <div className="m-3">
              <Input
                isRequired
                type="number"
                label="Puhelinnumero"
                placeholder="Kirjoita puhelinnumerosi"
              />
            </div>
            <div className="m-3">
              <Input
                isRequired
                type="email"
                label="Sähköposti"
                placeholder="Kirjoita sähköpostisi"
              />
            </div>

            <div className="m-3">
              <Input
                isRequired
                type="date"
                label="Valitse päivämäärä"
                placeholder="31.11.2023"
              />
            </div>

            <div className="m-2 flex space-x-4">
              <Button>Haluan noutaa itse</Button>
              <Button>Haluan kuljetuksen</Button>
            </div>
          </CardBody>
        </Card>

        <Card>
          <div>
            <CardBody>
              <h1> Tilauksesi</h1>
              <div>
                {cart.map((product, index) => {
                  return (
                    <p key={index}>
                      {product.image_url}, {product.name},{product.price}
                    </p>
                  );
                })}
              </div>
            </CardBody>

            <CardBody>
              <h1> Valitse maksu tapa</h1>

              <div>
                <Button className="m-3" onClick={onClickEmptyBasket}>
                  Tyhjennä kori
                </Button>
                <Button className="m-3">Vahvista tilaus</Button>
              </div>
            </CardBody>
          </div>
        </Card>
      </div>
    </div>
  );
}
