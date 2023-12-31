import "~/styles/globals.css";
import { QuickstartProvider } from "./_components/PlaidProvider";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./_components/navbar";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
        <html className="h-full bg-white">
        <body className='h-full'>
          <TRPCReactProvider headers={headers()} >
            <QuickstartProvider>
            <Navbar/>
            {children}
            </QuickstartProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
