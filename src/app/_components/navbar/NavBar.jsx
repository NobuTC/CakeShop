import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Chip,
  Badge,
} from "@nextui-org/react";
import { useCart, useOpenContext } from "../../providers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CartIcon } from "../icons/CartIcon";

export default function MyNavBar() {
  const { cartState } = useCart();
  const { onOpen } = useOpenContext();

  function cartCount() {
    if (isClient && cartState.cart && cartState.cart.length > 0) {
      return <Chip color="danger">{cartState.cart.length}</Chip>;
    } else {
      return "";
    }
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const basketCount = isClient && cartState.cart ? cartState.cart.length : 0;

  return (
    <Navbar position="static">
      <NavbarBrand>
        <Link href="/" color="foreground">
          <p className="font-bold text-inherit">Kakkukauppa</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" aria-current="page" href="/">
            Kotisivu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" aria-current="page" href="/category">
            Categoria
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" aria-current="page" href="/aboutme">
            Oma Tarina
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="p-4 font-semibold"
            color="default"
            variant="flat"
            onPress={onOpen}
          >
            {!!basketCount && (
              <Badge color="danger" content={basketCount} shape="circle">
                <CartIcon size={25} />
              </Badge>
            )}
            {!basketCount && <CartIcon size={25} />}
            <span className="mr-1"></span>
            Kori
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
