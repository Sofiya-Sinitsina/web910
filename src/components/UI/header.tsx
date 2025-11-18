"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import { useState } from "react";
import RegistartionModal from "./modals/registration.modal";
import LoginModal from "./modals/login.modal";


export const AcmeLogo = () => {
  return (
    <img
                        src="/images/logo_web.png"
                        alt="Logo"
                        width={64}
                        height={64}
                        className="w-16 h-16"
                    />
  );
};

export default function Header() {
    const navItems = [
        {href: "/", label: "recipes"},
        {href: "/ingredients", label: "ingredients"},
        {href: "/about", label: "About us"}
    ];

    const [isRegistrationOpen, setRegistrationOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);

    return (
        <Navbar position="static" className="flex flex-row w-full bg-[#A3B18A]">
            <NavbarBrand className="flex items-center justify-start px-4 my-2">
                <AcmeLogo />
                <p className="font-bold text-inherit">SS</p>
            </NavbarBrand>
        
            {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                <Link className="my-auto p-2 hover:bg-[#463F3A] rounded text-[#463F3A] hover:text-[#EDEDE9]" href="#">
                    Features
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link className="my-auto p-2 hover:bg-[#463F3A] rounded text-[#463F3A] hover:text-[#EDEDE9]" href="#">
                    Customers
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link className="my-auto p-2 hover:bg-[#463F3A] rounded text-[#463F3A] hover:text-[#EDEDE9]" href="#">
                    Integrations
                </Link>
                </NavbarItem>
            </NavbarContent> */}

            {navItems.map((item) => {
                return (
                    <NavbarItem key={item.href}>
                        <Link color="foreground" href={item.href}>
                        {item.label}
                        </Link>
                    </NavbarItem>
                )
            })}
            <NavbarContent justify="end">
                <NavbarItem className="flex">
                <Button as={Link} onPress={() => setLoginOpen(true)} className="my-btn">
                    Login
                </Button>
                </NavbarItem>
                <NavbarItem>
                <Button as={Link} onPress={() => setRegistrationOpen(true)} className="my-btn">
                    Sign Up
                </Button>
                </NavbarItem>
            </NavbarContent>
        <RegistartionModal isOpen={isRegistrationOpen} onClose={() => setRegistrationOpen(false)} />
        <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}/>
        </Navbar>
    );
}