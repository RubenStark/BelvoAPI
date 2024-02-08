"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function MyNavbar() {

    const pathname = usePathname();

    const isActive = pathname === "/amounts" ? "primary" : "foreground";

    console.log(isActive);

    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <Link href="/" className="font-bold text-inherit">Belvo</Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="/amounts" aria-current="page" color={isActive}>
                        Amounts
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <UserButton afterSignOutUrl="/" />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
