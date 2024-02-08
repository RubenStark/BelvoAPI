"use client";
import MyNavbar from "@/components/navbar";
import {NextUIProvider} from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      <Toaster />
      <MyNavbar />
        {children}
    </NextUIProvider>
  );
}
