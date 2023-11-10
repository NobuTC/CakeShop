import {
  Card,
  CardBody,
  Button,
  CardHeader,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function Checkout() {
  return (
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
              <p>testi</p>
            </div>
          </CardBody>

          <CardBody>
            <h1> Valitse maksu tapa</h1>
            <div></div>
            <div>
              <Button className="m-3">Vahvista tilaus</Button>
            </div>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
