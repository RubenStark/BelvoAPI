"use client";
import MyNavbar from "@/components/navbar";
import {NextUIProvider} from "@nextui-org/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      <MyNavbar />
        {children}
    </NextUIProvider>
  );
}
