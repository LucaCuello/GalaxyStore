import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  User,
} from "@nextui-org/react";
import { useState } from "react";
import { IoMdPlanet } from "react-icons/io";
import { NavLink, Link as RouterLink } from "react-router-dom";
import Avatar from "../assets/icons/avatar.jpg";
import { useAuth } from "../hooks/useAuth";
import { menuItems } from "../utils/utils";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, userData } = useAuth();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      classNames={{ base: "bg-transparent" }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as={RouterLink} to={"/home"}>
          <IoMdPlanet className="text-xl text-violet-400" />
          <p className="font-bold text-inherit ms-2">GALAXY STORE</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" as={NavLink} to={"/home"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" as={NavLink} to={"/products"}>
            Products
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        {isAuthenticated && userData ? (
          <NavbarItem>
            <User
              name={userData.fullName}
              description={userData.email}
              avatarProps={{
                src: Avatar,
              }}
            />
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link as={RouterLink} to="auth/login" className="text-violet-300">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={RouterLink}
                className="text-violet-300 bg-violet-500/20"
                to="auth/register"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarMenu className="bg-[#07041bff]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <RouterLink className="w-full text-default-400" to={`${item.href}`}>
              {item.name}
            </RouterLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
