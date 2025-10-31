import Navigations from "@/starter/components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s The wild Oasis",
    default: "The wild Oasis",
  },
  description: "Luxiorios cabin Hotels in Italian.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Logo />
        <Navigations />
        {children}
      </body>
    </html>
  );
}
