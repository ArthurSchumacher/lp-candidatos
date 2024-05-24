"use client";
import paths from "@/paths";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Newspaper,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Biografia",
      href: "#",
    },
    {
      label: "Atuação",
      href: "#",
    },
    {
      label: "Fotos",
      href: "#",
    },
    {
      label: "Contato",
      href: "#",
    },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className="bg-blue shadow-lg py-4"
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="text-xl font-bold text-white">
            Herculano Borges
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link
            href={"#"}
            className="text-white border-b border-transparent hover:border-b hover:border-b-white"
          >
            Biografia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={"#"}
            className="text-white border-b border-transparent hover:border-b hover:border-b-white"
          >
            Atuação
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={"#"}
            className="text-white border-b border-transparent hover:border-b hover:border-b-white"
          >
            Fotos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={"#"}
            className="text-white border-b border-transparent hover:border-b hover:border-b-white"
          >
            Contato
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link
            href={paths.instagram()}
            target="_blank"
            className="text-white hover:text-white-400 hover:bg-orange"
          >
            <Instagram size={20} />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link
            href={paths.facebook()}
            target="_blank"
            className="text-white hover:text-white-400 hover:bg-orange"
          >
            <Facebook size={20} />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link
            href={paths.facebook()}
            target="_blank"
            className="text-white hover:text-white-400 hover:bg-orange"
          >
            <Youtube size={20} />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link
            href={paths.facebook()}
            target="_blank"
            className="text-white hover:text-white-400 hover:bg-orange"
          >
            <Twitter size={20} />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link
            href={paths.linkedin()}
            target="_blank"
            className="text-white hover:text-white-400 hover:bg-orange"
          >
            <Linkedin size={20} />
          </Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
      </NavbarContent>

      <NavbarMenu className="max-h-72 mt-8 bg-blue-100">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full py-4 flex items-center justify-center"
              href={item.href}
            >
              <span className="text-white hover:bg-orange">{item.label}</span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
