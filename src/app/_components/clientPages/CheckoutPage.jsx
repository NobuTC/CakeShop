"use client";
import {
  Card,
  CardBody,
  Button,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useCart } from "../../providers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EmptyCart from "../cart/EmptyCart";

export default function CheckoutPage() {
  const { cartState, dispatch } = useCart();
  const { cart } = cartState;
  const router = useRouter();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postnumber, setPostNumber] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");

  const onSelectingDelivery = (event) => {
    setDeliveryType(event.target.value);
  };

  const sendOrder = async () => {
    if (!cart || cart.length === 0) {
      return;
    }

    const raw = JSON.stringify({
      email: email,
      buyer_first_name: firstname,
      buyer_last_name: lastname,
      address: address,
      postal_code: postnumber,
      city: city,
      buyer_phonenumber: phoneNumber,
      pick_up_date: date,
      optional_text: customerMessage,
      OrderProducts: cart.map((orderProduct) => {
        return {
          productId: orderProduct.product.id,
          quantity: 1,
          optional_text: orderProduct.message,
        };
      }),
    });
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    await fetch(process.env.NEXT_PUBLIC_URL + "/api/order/add", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        dispatch({ type: "CLEAR_CART" });
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  if (cart && cart.length === 0) {
    return <EmptyCart isCheckout={true} />;
  }

  const onSubmit = (event) => {
    event.preventDefault(); //This stop refreshing the page
    sendOrder();
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="live-preview flex h-full w-full not-prose justify-center items-center ">
          <Card className="border-none m-4">
            <form onSubmit={onSubmit}>
              <CardBody>
                <h1>Yhteistiedot</h1>
                <div className="m-3 flex space-x-4">
                  <Input
                    isRequired
                    type="name"
                    label="Etunimi"
                    placeholder="Kirjoita etunimesi"
                    value={firstname}
                    onChange={(event) => {
                      setFirstname(event.target.value);
                    }}
                  ></Input>
                  <Input
                    isRequired
                    type="name"
                    label="Sukunimi"
                    placeholder="Kirjoita sukunimesi"
                    value={lastname}
                    onChange={(event) => {
                      setLastname(event.target.value);
                    }}
                  ></Input>
                </div>

                <div className="m-3">
                  <Input
                    isRequired
                    type="address"
                    label="Osoite"
                    placeholder="Kirjoita osoitteesi"
                    value={address}
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                  ></Input>
                </div>

                <div className="m-2 flex space-x-4">
                  <Input
                    isRequired
                    type="city"
                    label="Kaupinki"
                    placeholder="Kirjoita kaupunkisi"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                  ></Input>
                  <Input
                    isRequired
                    type="post-number"
                    label="Postinumero"
                    placeholder="Kirjoita postinumerosi"
                    value={postnumber}
                    onChange={(event) => {
                      setPostNumber(event.target.value);
                    }}
                  ></Input>
                </div>
                <div className="m-3">
                  <Input
                    isRequired
                    type="number"
                    label="Puhelinnumero"
                    placeholder="Kirjoita puhelinnumerosi"
                    value={phoneNumber}
                    onChange={(event) => {
                      setNumber(event.target.value);
                    }}
                  />
                </div>
                <div className="m-3">
                  <Input
                    isRequired
                    type="email"
                    label="Sähköposti"
                    placeholder="Kirjoita sähköpostisi"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>

                <div className="m-3">
                  <Input
                    isRequired
                    type="date"
                    label="Valitse päivämäärä"
                    placeholder="31.11.2023"
                    value={date}
                    onChange={(event) => {
                      setDate(event.target.value);
                    }}
                  />
                </div>

                <div className="m-3">
                  <Textarea
                    label="Valinnainen viesti kenttä"
                    labelPlacement="inside"
                    placeholder="Kirjoita viesti tai lisätietoa."
                    value={customerMessage}
                    onChange={(event) => {
                      setCustomerMessage(event.target.value);
                    }}
                  />
                </div>

                <div className="m-2 flex space-x-4">
                  <Select
                    label="Valitse toimitustapa"
                    className="max-w-xs"
                    onChange={onSelectingDelivery}
                  >
                    <SelectItem key="pickup" value={0}>
                      Haluan noutaa itse
                    </SelectItem>
                    <SelectItem key="delivery" value={1}>
                      Haluan kuljetuksen
                    </SelectItem>
                  </Select>
                </div>

                <Button type="submit">Lähetä</Button>
              </CardBody>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
