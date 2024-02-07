import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";

export default function MyNavbar() {
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <Link href="/" className="font-bold text-inherit">Belvo</Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <UserButton afterSignOutUrl="/" />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
