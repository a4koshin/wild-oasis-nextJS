import Navigations from "@/starter/components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";

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
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <Logo />
        <Navigations />
        {children}
      </body>
    </html>
  );
}
