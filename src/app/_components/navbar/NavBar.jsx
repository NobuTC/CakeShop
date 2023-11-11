import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { useCart } from "../../providers";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MyNavBar() {
  // Same: const cartState = useCart().cartState
  const { cartState } = useCart();
  const router = useRouter();

  function cartCount() {
    if (cartState.cart && cartState.cart.length > 0) {
      return `(${cartState.cart.length})`;
    } else {
      return "";
    }
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Navbar position="static">
      <NavbarBrand>
        <Link href="/" color="foreground">
          <p className="font-bold text-inherit">Kakkukauppa</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" aria-current="page" href="/category">
            Categoria
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Haku
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Kakku tarina
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {isClient && <Link href="#">Kori {cartCount()}</Link>}
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            variant="flat"
            onPress={() => router.push("/checkout")}
          >
            Kassalle
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
