import type { Metadata } from "next";
import {Providers} from "./providers"
import "./globals.css";


export const metadata: Metadata = {
  title: "My Chat App",
  description: "A chat app built with Next.js and Chakra UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
