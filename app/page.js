import Link from "next/link";
import Navigations from "./_components/Navigations";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <h1>Hello Next!</h1>

      <Link href="/cabins">Explore to the Page</Link>
    </>
  );
}
