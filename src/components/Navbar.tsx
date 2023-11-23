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
import { useEffect, useState } from "react";
import { IoMdPlanet } from "react-icons/io";
import { NavLink, Link as RouterLink } from "react-router-dom";
import Avatar from "../assets/icons/avatar.jpg";
import { useAuth } from "../hooks/useAuth";

import firebase from "../config/firebase";

interface User {
  userId: string;
  nombre: string;
  email: string;
}

export const NavBar = () => {
  useEffect(() => {
    const getAllUsers = async (): Promise<User[]> => {
      try {
        const usersCollection = await firebase
          .firestore()
          .collection("users")
          .get();
        const users: User[] = [];
        usersCollection.forEach((doc) => {
          users.push(doc.data() as User);
        });
        return users;
      } catch (error) {
        console.error("Error al obtener los usuarios: ", error);
        return []; // Devuelve un arreglo vacío en caso de error
      }
    };

    const getUserByToken = async (): Promise<User | undefined> => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("No hay token disponible");
          return undefined;
        }

        const allUsers = await getAllUsers();
        const filteredUser = allUsers.find((user) => user.userId === token);
        console.log(filteredUser);
        return filteredUser;
      } catch (error) {
        console.error("Error al filtrar el usuario: ", error);
        return undefined;
      }
    };
    getUserByToken();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const menuItems = ["Home", "About us", "Products", "Log in"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as={RouterLink} to={"/home"}>
          <IoMdPlanet className="text-xl text-violet-300" />
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
          <Link
            color="foreground"
            href="#"
            aria-current="page"
            as={NavLink}
            to={"/about"}
          >
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" as={NavLink} to={"/products"}>
            Products
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {isAuthenticated ? (
          <User
            name="Luca Cuello"
            description="lucagcuello@gmail.com"
            avatarProps={{
              src: Avatar,
            }}
          />
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
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
