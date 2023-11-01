import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function MyNavBar() {
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
          <Link href="#">Kori</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Kassalle
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
